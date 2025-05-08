import fs from 'fs';
import path from 'path';

interface DesignTokens {
    breakpoints?: Record<string, string>;
    colors?: Record<string, string>;
    typography?: {
        fonts: Record<string, any>;
        fontSizes: Record<string, string>;
        fontWeights: Record<string, string | number>;
        lineHeights: Record<string, string | number>;
    };
    spacing?: Record<string, string>;
}

function extractScssTokens(scssContent: string): DesignTokens {
    const tokens: DesignTokens = {
        breakpoints: {},
        colors: {},
        typography: {
            fonts: {},
            fontSizes: {},
            fontWeights: {},
            lineHeights: {}
        },
        spacing: {}
    };

    // Extraer breakpoints
    const breakpointRegex = /\$ads-breakpoints-scales:\s*\(([^)]+)\)/s;
    const breakpointMatch = scssContent.match(breakpointRegex);
    if (breakpointMatch) {
        const breakpointContent = breakpointMatch[1];
        const breakpointPairs = breakpointContent.split(';').filter(Boolean);

        breakpointPairs.forEach(pair => {
            const [key, value] = pair.split(':').map(s => s.trim().replace(/['",]/g, ''));
            if (key && value) {
                tokens.breakpoints![key] = value;
            }
        });
    }

    // Extraer colores
    const colorRegex = /\$ads-(?:color-)?([a-z-]+):\s*([^;]+);/g;
    let colorMatch;
    while ((colorMatch = colorRegex.exec(scssContent)) !== null) {
        const [_, name, value] = colorMatch;
        tokens.colors![name] = value.trim();
    }

    // Extraer tipografía
    const fontRegex = /@font-face\s*{([^}]+)}/g;
    let fontMatch;
    while ((fontMatch = fontRegex.exec(scssContent)) !== null) {
        const fontContent = fontMatch[1];
        const familyMatch = fontContent.match(/font-family:\s*([^;]+);/);
        const weightMatch = fontContent.match(/font-weight:\s*([^;]+);/);
        const srcMatch = fontContent.match(/src:\s*url\('([^']+)'\)/);

        if (familyMatch && srcMatch) {
            const family = familyMatch[1].trim();
            const weight = weightMatch ? weightMatch[1].trim() : 'normal';
            const src = srcMatch[1];

            if (tokens.typography && !tokens.typography.fonts[family]) {
                tokens.typography.fonts[family] = {};
            }
            if (tokens.typography) {
                tokens.typography.fonts[family][weight] = src;
            }
        }
    }

    // Extraer tamaños de fuente
    const fontSizeRegex = /\$ads-font-size-([a-z]+):\s*([^;]+);/g;
    let fontSizeMatch;
    while ((fontSizeMatch = fontSizeRegex.exec(scssContent)) !== null) {
        const [_, name, value] = fontSizeMatch;
        if (tokens.typography) {
            tokens.typography.fontSizes[name] = value.trim();
        }
    }

    // Extraer pesos de fuente
    const fontWeightRegex = /\$ads-font-weight(?:-)?([a-z]*):\s*([^;]+);/g;
    let fontWeightMatch;
    while ((fontWeightMatch = fontWeightRegex.exec(scssContent)) !== null) {
        const [_, name, value] = fontWeightMatch;
        const key = name || 'default';
        if (tokens.typography) {
            tokens.typography.fontWeights[key] = value.trim();
        }
    }

    // Extraer line heights
    const lineHeightRegex = /\$ads-line-height-([a-z]+):\s*([^;]+);/g;
    let lineHeightMatch;
    while ((lineHeightMatch = lineHeightRegex.exec(scssContent)) !== null) {
        const [_, name, value] = lineHeightMatch;
        if (tokens.typography) {
            tokens.typography.lineHeights[name] = value.trim();
        }
    }

    // Extraer spacing
    const spacingRegex = /\$ads-(padding|margin|spacing)-([a-z]+):\s*([^;]+);/g;
    let spacingMatch;
    while ((spacingMatch = spacingRegex.exec(scssContent)) !== null) {
        const [_, type, name, value] = spacingMatch;
        tokens.spacing![`${type}-${name}`] = value.trim();
    }

    return tokens;
}





function listFiles(directoryPath: string): string[] {
    try {
        const files = fs.readdirSync(directoryPath);
        return files;
    } catch (err) {
        console.error('Error leyendo el directorio:', err);
        throw err;
    }
}

function readFile(path: string) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log('Contenido del archivo:', data);
        return data;
    } catch (err) {
        console.error('Error leyendo el archivo:', err);
        throw err;
    }
}


function buildTokens() {
    // Leer archivo SCSS
    const currentDir = process.cwd()

    const scssDirectory = `${currentDir}/src/globals/`

    listFiles(scssDirectory).forEach((file) => {
        const filePath = `${scssDirectory}${file}`
        const fileContent = fs.readFileSync(filePath, 'utf8')
    })

    // Extraer tokens
    const scssContent = listFiles(scssDirectory).map(file => readFile(`${scssDirectory}${file}`)).join('\n');
    const tokens = extractScssTokens(scssContent);

    // this is tokens generated directory: D:\profile\sistemas\seminario\OpenScience\src\style-library\themes\tokens
    // Generar archivo JSON
    const savePath = `${currentDir}/src/style-library/themes/tokens`
    if (!fs.existsSync(savePath)) {
        fs.mkdirSync(savePath, { recursive: true });
    }
    const jsonOutputPath = path.join(savePath, 'tokens.json');
    fs.writeFileSync(jsonOutputPath, JSON.stringify(tokens, null, 2));

    // Generar archivo TypeScript
    const tsOutputPath = path.join(savePath, 'tokens.ts');
    const tsContent = `/**
    * @generated Automatically by the buildTokens function. Do not edit manually.
    * @see scripts/tokenizer.ts
    */
export interface DesignTokens {
  breakpoints?: Record<string, string>;
  colors?: Record<string, string>;
  typography?: {
    fonts: Record<string, any>;
    fontSizes: Record<string, string>;
    fontWeights: Record<string, string | number>;
    lineHeights: Record<string, string | number>;
  };
  spacing?: Record<string, string>;
}

const tokens: DesignTokens = ${JSON.stringify(tokens, null, 2)};

export default tokens;
`;

    fs.writeFileSync(tsOutputPath, tsContent);

    console.log('Tokens generados exitosamente en:', savePath);
}