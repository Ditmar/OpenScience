import StyleDictionary from 'style-dictionary';
import type { Config, Transform, Format } from 'style-dictionary/types';
import type { Named } from 'style-dictionary';

// 1. Definición de tipos para nuestros tokens
type TokenValue = string | number | { value: string | number };
interface DesignToken {
  value: TokenValue;
  type?: string;
  [key: string]: any;
}

// 2. Formato personalizado para SCSS
const scssVariablesFormat: Named<Format> = {
  name: 'scss/variables-custom',
  formatter: ({ dictionary }): string => {
    return dictionary.allProperties
      .map((prop: DesignToken) => `$${prop.name}: ${prop.value};`)
      .join('\n');
  },
};

// 3. Transformaciones personalizadas
const nameCtiCamelTransform: Named<Transform> = {
  name: 'name/cti/camel',
  type: 'name',
  transformer: (prop): string => {
    return prop.path
      .map((token: string, index: number) =>
        index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1),
      )
      .join('');
  },
};

const sizeRemTransform: Named<Transform> = {
  name: 'size/rem',
  type: 'value',
  matcher: (prop): boolean =>
    ['fontSizes', 'spacing', 'borderRadius', 'sizing'].includes(prop.type || ''),
  transformer: (prop): string => {
    const numericValue = parseFloat(prop.value.toString());
    if (!isNaN(numericValue) && prop.value.toString().match(/px$/)) {
      return `${numericValue / 16}rem`;
    }
    return prop.value.toString();
  },
};

// 4. Registrar extensiones
StyleDictionary.registerFormat(scssVariablesFormat);
StyleDictionary.registerTransform(nameCtiCamelTransform);
StyleDictionary.registerTransform(sizeRemTransform);

// 5. Configuración principal
const config: Config = {
  source: ['src/globals/**/*.scss'],
  parsers: [
    {
      pattern: /\.scss$/,
      parse: ({ contents }): { properties: DesignToken[] } => {
        const variables: Record<string, string> = {};
        const regex = /\$([\w-]+)\s*:\s*([^;]+);/g;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(contents)) !== null) {
          const [, name, value] = match;
          variables[name] = value.trim();
        }

        return {
          properties: Object.entries(variables).map(([name, value]) => ({
            name,
            value,
            path: name.split('-'),
            original: { value },
          })),
        };
      },
    },
  ],
  platforms: {
    json: {
      transformGroup: 'web',
      buildPath: 'src/style-library/tokens/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem', 'color/css'],
      buildPath: 'src/style-library/tokens/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables-custom',
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/style-library/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'typescript/es6-declarations',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};

export default config;
