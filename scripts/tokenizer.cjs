"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
function extractScssTokens(scssContent) {
    var tokens = {
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
    var breakpointRegex = /\$ads-breakpoints-scales:\s*\(([^)]+)\)/s;
    var breakpointMatch = scssContent.match(breakpointRegex);
    if (breakpointMatch) {
        var breakpointContent = breakpointMatch[1];
        var breakpointPairs = breakpointContent.split(';').filter(Boolean);
        breakpointPairs.forEach(function (pair) {
            var _a = pair.split(':').map(function (s) { return s.trim().replace(/['",]/g, ''); }), key = _a[0], value = _a[1];
            if (key && value) {
                tokens.breakpoints[key] = value;
            }
        });
    }
    // Extraer colores
    var colorRegex = /\$ads-(?:color-)?([a-z-]+):\s*([^;]+);/g;
    var colorMatch;
    while ((colorMatch = colorRegex.exec(scssContent)) !== null) {
        var _1 = colorMatch[0], name_1 = colorMatch[1], value = colorMatch[2];
        tokens.colors[name_1] = value.trim();
    }
    // Extraer tipografía
    var fontRegex = /@font-face\s*{([^}]+)}/g;
    var fontMatch;
    while ((fontMatch = fontRegex.exec(scssContent)) !== null) {
        var fontContent = fontMatch[1];
        var familyMatch = fontContent.match(/font-family:\s*([^;]+);/);
        var weightMatch = fontContent.match(/font-weight:\s*([^;]+);/);
        var srcMatch = fontContent.match(/src:\s*url\('([^']+)'\)/);
        if (familyMatch && srcMatch) {
            var family = familyMatch[1].trim();
            var weight = weightMatch ? weightMatch[1].trim() : 'normal';
            var src = srcMatch[1];
            if (tokens.typography && !tokens.typography.fonts[family]) {
                tokens.typography.fonts[family] = {};
            }
            if (tokens.typography) {
                tokens.typography.fonts[family][weight] = src;
            }
        }
    }
    // Extraer tamaños de fuente
    var fontSizeRegex = /\$ads-font-size-([a-z]+):\s*([^;]+);/g;
    var fontSizeMatch;
    while ((fontSizeMatch = fontSizeRegex.exec(scssContent)) !== null) {
        var _2 = fontSizeMatch[0], name_2 = fontSizeMatch[1], value = fontSizeMatch[2];
        if (tokens.typography) {
            tokens.typography.fontSizes[name_2] = value.trim();
        }
    }
    // Extraer pesos de fuente
    var fontWeightRegex = /\$ads-font-weight(?:-)?([a-z]*):\s*([^;]+);/g;
    var fontWeightMatch;
    while ((fontWeightMatch = fontWeightRegex.exec(scssContent)) !== null) {
        var _3 = fontWeightMatch[0], name_3 = fontWeightMatch[1], value = fontWeightMatch[2];
        var key = name_3 || 'default';
        if (tokens.typography) {
            tokens.typography.fontWeights[key] = value.trim();
        }
    }
    // Extraer line heights
    var lineHeightRegex = /\$ads-line-height-([a-z]+):\s*([^;]+);/g;
    var lineHeightMatch;
    while ((lineHeightMatch = lineHeightRegex.exec(scssContent)) !== null) {
        var _4 = lineHeightMatch[0], name_4 = lineHeightMatch[1], value = lineHeightMatch[2];
        if (tokens.typography) {
            tokens.typography.lineHeights[name_4] = value.trim();
        }
    }
    // Extraer spacing
    var spacingRegex = /\$ads-(padding|margin|spacing)-([a-z]+):\s*([^;]+);/g;
    var spacingMatch;
    while ((spacingMatch = spacingRegex.exec(scssContent)) !== null) {
        var _5 = spacingMatch[0], type = spacingMatch[1], name_5 = spacingMatch[2], value = spacingMatch[3];
        tokens.spacing["".concat(type, "-").concat(name_5)] = value.trim();
    }
    return tokens;
}
function listFiles(directoryPath) {
    try {
        var files = fs_1.default.readdirSync(directoryPath);
        return files;
    }
    catch (err) {
        console.error('Error leyendo el directorio:', err);
        throw err;
    }
}
function readFile(path) {
    try {
        var data = fs_1.default.readFileSync(path, 'utf8');
        console.log('Contenido del archivo:', data);
        return data;
    }
    catch (err) {
        console.error('Error leyendo el archivo:', err);
        throw err;
    }
}
function buildTokens() {
    // Leer archivo SCSS
    var currentDir = process.cwd();
    var scssDirectory = "".concat(currentDir, "/src/globals/");
    listFiles(scssDirectory).forEach(function (file) {
        var filePath = "".concat(scssDirectory).concat(file);
        var fileContent = fs_1.default.readFileSync(filePath, 'utf8');
    });
    // Extraer tokens
    var scssContent = listFiles(scssDirectory).map(function (file) { return readFile("".concat(scssDirectory).concat(file)); }).join('\n');
    var tokens = extractScssTokens(scssContent);
    // this is tokens generated directory: D:\profile\sistemas\seminario\OpenScience\src\style-library\themes\tokens
    // Generar archivo JSON
    var savePath = "".concat(currentDir, "/src/style-library/themes/tokens");
    if (!fs_1.default.existsSync(savePath)) {
        fs_1.default.mkdirSync(savePath, { recursive: true });
    }
    var jsonOutputPath = path_1.default.join(savePath, 'tokens.json');
    fs_1.default.writeFileSync(jsonOutputPath, JSON.stringify(tokens, null, 2));
    // Generar archivo TypeScript
    var tsOutputPath = path_1.default.join(savePath, 'tokens.ts');
    var tsContent = "// Generated automatically from SCSS variables\nexport interface DesignTokens {\n  breakpoints?: Record<string, string>;\n  colors?: Record<string, string>;\n  typography?: {\n    fonts: Record<string, any>;\n    fontSizes: Record<string, string>;\n    fontWeights: Record<string, string | number>;\n    lineHeights: Record<string, string | number>;\n  };\n  spacing?: Record<string, string>;\n}\n\nconst tokens: DesignTokens = ".concat(JSON.stringify(tokens, null, 2), ";\n\nexport default tokens;\n");
    fs_1.default.writeFileSync(tsOutputPath, tsContent);
    console.log('Tokens generados exitosamente en:', savePath);
}
