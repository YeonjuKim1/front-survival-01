module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
        ],
      }],
      'react/jsx-filename-extension': [2, {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }],
      "react/react-in-jsx-scope": "off",
    },
  };