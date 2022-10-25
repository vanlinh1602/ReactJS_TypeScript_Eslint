module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'max-len': [
            'error',
            { code: 120, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true },
        ],
        'function-paren-newline': 0,
        'no-empty': 0,
        'operator-linebreak': 0,
        'implicit-arrow-linebreak': 0,
        'no-underscore-dangle': ['error', { allow: ['_t', '_id'] }],
        'no-useless-escape': 0,
        'no-restricted-globals': 'warn',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'object-curly-newline': ['error', { consistent: true }],
        'comma-dangle': 'off',
        'no-param-reassign': ['error', { props: false }],
        '@typescript-eslint/comma-dangle': 0,
        indent: 'off',
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/require-default-props': 0,
        'react/jsx-curly-newline': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/forbid-prop-types': 'warn',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 'warn',
        'react/prop-types': 'warn',
        'react/jsx-one-expression-per-line': 0,
        'react/function-component-definition': 0,
        'react/jsx-wrap-multilines': 0,
    }
}
