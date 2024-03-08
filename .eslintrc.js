module.exports = {
    parser: '@typescript-eslint/parser',
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
    },
    ignorePatterns: [
        '/node_modules/*',
        '/.next/*',
        '/out/*',
        '/public/*',
        '/coverage/*',
        '/.eslintrc.js','tailwind.config.js',
    ],
}
