module.exports = {
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',

        'indent': ['error', 2],
        'linebreak-style': 0,
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'padding-line-between-statements': [
          'error',
          { 'blankLine': 'always', 'prev': 'function', 'next': '*' }
        ],
      },
    }
  ],
}