import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

function handleError(error) {
  console.error(`
    ███████╗██████╗ ██████╗  ██████╗ ██████╗ 
    ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
    █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
    ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
    ██║     ██║  ██║██║  ██║╚██████╔╝██║  ██║
    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
    
    ¡Fallo en la generación de tokens del sistema de diseño!
  
    🕵️‍♂️ Causa: ${error.message}
    
    📂 Directorio afectado: ${error.path || 'No especificado'}
    
    🚦 Acciones requeridas:
    1. Verificar archivos SCSS en src/globals/
    2. Validar sintaxis de variables
    3. Revisar conexión con repositorio
    
    ℹ Soporte técnico: equipo-diseno@tuempresa.com
    `);

  process.exit(1);
}

function showSuccess(savePath) {
  console.log('\n\x1b[32m╔══════════════════════════════════════╗');
  console.log('║    🎉  TOKENS CREADOS CORRECTAMENTE  ║');
  console.log('╚══════════════════════════════════════╝\x1b[0m');
  console.log(`
  ███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗███████╗
  ██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝
  ███████╗██║   ██║██║     ██║     █████╗  ███████╗███████╗
  ╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║╚════██║
  ███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║███████║
  ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝
  
  ¡Tokens generados exitosamente! 🎨✨

  📂 Directorio: ${savePath}
  🕒 Hora: ${new Date().toLocaleTimeString()}
  
  Archivos creados:
  ✔ tokens.json - Definiciones completas
  ✔ tokens.ts - Tipos para TypeScript
  
  ¡Sistema de diseño listo para implementar! 🚀
  `);
}

/**
 * Extrae tokens de diseño de contenido SCSS
 */
function extractScssTokens(scssContent) {
  const tokens = {
    breakpoints: {},
    colors: {},
    typography: {
      fonts: {},
      fontSizes: {},
      fontWeights: {},
      lineHeights: {},
    },
    spacing: {},
  };

  // Extraer breakpoints
  const breakpointRegex = /\$ads-breakpoints-scales:\s*\(([^)]+)\)/s;
  const breakpointMatch = scssContent.match(breakpointRegex);
  if (breakpointMatch) {
    const breakpointContent = breakpointMatch[1];
    const breakpointPairs = breakpointContent.split(',').filter(Boolean);
    breakpointPairs.forEach((pair) => {
      const [key, value] = pair.split(':').map((s) => s.trim().replace(/['",]/g, ''));
      const keyFormatted = key.replace(/-/g, '_');
      if (key && value) {
        tokens.breakpoints[keyFormatted] = value.trim();
      }
    });
  }

  // Extraer colores
  const colorRegex = /\$ads-(?!breakpoints-scales)(?:color-)?([a-z-]+):\s*([^;]+);/g;
  const colorMatches = scssContent.matchAll(colorRegex);

  Array.from(colorMatches).forEach((colorMatch) => {
    // eslint-disable-next-line no-unused-vars
    const name = colorMatch[1];
    const value = colorMatch[2];
    const nameFormatted = name.replaceAll('-', '_');
    tokens.colors[nameFormatted] = value.trim();
  });

  // Extraer tipografía
  const fontRegex = /@font-face\s*{([^}]+)}/g;
  const fontMatches = scssContent.matchAll(fontRegex);
  if (!fontMatches) {
    return tokens;
  }
  Array.from(fontMatches).forEach((fontMatch) => {
    const fontContent = fontMatch[1];
    const familyMatch = fontContent.match(/font-family:\s*([^;]+);/);
    const weightMatch = fontContent.match(/font-weight:\s*([^;]+);/);
    const srcMatch = fontContent.match(/src:\s*url\('([^']+)'\)/);

    if (familyMatch && srcMatch) {
      const family = familyMatch[1].trim();
      const weight = weightMatch ? weightMatch[1].trim() : 'normal';
      const src = srcMatch[1];

      if (!tokens.typography.fonts[family]) {
        tokens.typography.fonts[family] = {};
      }
      tokens.typography.fonts[family][weight] = src;
    }
  });

  // Extraer tamaños de fuente
  const fontSizeRegex = /\$ads-font-size-([a-z]+):\s*([^;]+);/g;
  const fontSizeMatches = scssContent.matchAll(fontSizeRegex);

  Array.from(fontSizeMatches).forEach((fontSizeMatch) => {
    // eslint-disable-next-line no-unused-vars
    const name = fontSizeMatch[1];
    const value = fontSizeMatch[2];
    console.log(value);

    tokens.typography.fontSizes[name] = value.trim();
  });

  // Extraer pesos de fuente
  const fontWeightRegex = /\$ads-font-weight(?:-)?([a-z]*):\s*([^;]+);/g;
  const fontWeightMatches = scssContent.matchAll(fontWeightRegex);
  Array.from(fontWeightMatches).forEach((fontWeightMatch) => {
    // eslint-disable-next-line no-unused-vars
    const name = fontWeightMatch[1];
    const value = fontWeightMatch[2];
    const key = name || 'default';
    tokens.typography.fontWeights[key] = value.trim();
  });

  // Extraer line heights
  const lineHeightRegex = /\$ads-line-height-([a-z]+):\s*([^;]+);/g;
  const lineHeightMatches = scssContent.matchAll(lineHeightRegex);
  Array.from(lineHeightMatches).forEach((lineHeightMatch) => {
    // eslint-disable-next-line no-unused-vars
    const name = lineHeightMatch[1];
    const value = lineHeightMatch[2];
    tokens.typography.lineHeights[name] = value.trim();
  });

  // Extraer spacing
  const spacingRegex = /\$ads-(padding|margin|spacing)-([a-z]+):\s*([^;]+);/g;
  const spacingMatches = scssContent.matchAll(spacingRegex);
  Array.from(spacingMatches).forEach((spacingMatch) => {
    // eslint-disable-next-line no-unused-vars
    const type = spacingMatch[1];
    const name = spacingMatch[2];
    const value = spacingMatch[3];
    tokens.spacing[`${type}_${name}`] = value.trim();
  });

  return tokens;
}

/**
 * Construye los tokens a partir de archivos SCSS
 */
async function buildTokens() {
  try {
    const currentDir = process.cwd();
    const scssDirectory = join(currentDir, 'src', 'globals');
    const savePath = join(currentDir, 'src', 'style-library', 'themes', 'tokens');

    // Leer y combinar todos los archivos SCSS
    const files = readdirSync(scssDirectory).filter((file) => file.endsWith('.scss'));

    let tokens = {};
    let combinedScssContent = '';
    Array.from(files).forEach((file) => {
      const content = readFileSync(join(scssDirectory, file));
      combinedScssContent += content;
    });

    tokens = extractScssTokens(combinedScssContent);

    if (!existsSync(savePath)) {
      mkdirSync(savePath, { recursive: true });
    }

    // Generar archivo JSON
    const jsonOutputPath = join(savePath, 'tokens.json');
    writeFileSync(jsonOutputPath, JSON.stringify(tokens, null, 2));

    // Generar archivo TypeScript
    const tsOutputPath = join(savePath, 'tokens.ts');
    const tsContent = `/**
 * @generated Automatically by the buildTokens function. Do not edit manually.
 * @see scripts/tokenizer.mjs
 */
export interface DesignTokens {
  breakpoints?: Record<string, string>;
  colors?: Record<string, string>;
  typography?: {
    fonts: Record<string, Record<string, string>>;
    fontSizes: Record<string, string>;
    fontWeights: Record<string, string | number>;
    lineHeights: Record<string, string | number>;
  };
  spacing?: Record<string, string>;
  shadows?: Record<string, string>;
}

const tokens: DesignTokens = ${JSON.stringify(tokens, null, 2)};

export default tokens;
`;
    writeFileSync(tsOutputPath, tsContent);

    showSuccess(savePath);
  } catch (err) {
    handleError(err);
  }
}

// Ejecutar la generación de tokens
buildTokens();
