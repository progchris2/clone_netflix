module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                jsxSingleQuote: false,
                tabWidth: 4,
                trailingComma: 'all',
                Semicolons: true,
                'JSX Brackets': false,
            },
        ],
    },
};
