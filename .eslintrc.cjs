module.exports = {
  extends: [
    // Extiende tu configuración base de Astro
    require.resolve('./style-guide/astro'),
    // Añade configuraciones estándar recomendadas
    'stylelint-config-standard-scss'
  ],
  rules: {
    // Configuración específica para los errores que estás experimentando
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [
          'after-comment',
          'after-declaration',
          'inside-single-line-block'
        ]
      }
    ],
    'no-descending-specificity': null, // Opcional: desactiva esta regla si prefieres
    'selector-class-pattern': null // Opcional: desactiva si usas convenciones como BEM
  },
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**'
  ]
};
