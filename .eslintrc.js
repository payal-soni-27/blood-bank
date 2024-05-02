module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-typescript/base'],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    // Possible Problems https://eslint.org/docs/latest/rules/#possible-problems
    'no-await-in-loop': 'error',
    'array-callback-return': 'error',
    'no-duplicate-imports': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    // 'no-new-native-nonconstructor': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': 'error',
    'require-atomic-updates': 'error',
    // Suggestions https://eslint.org/docs/latest/rules/#suggestions
    'arrow-body-style': ['error', 'as-needed'],
    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    //'consistent-return': 'error',
    curly: ['error', 'multi', 'consistent'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': ['error'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'smart'],
    'func-name-matching': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/**'],
};
