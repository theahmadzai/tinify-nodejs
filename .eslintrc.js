module.exports = {
    "env": {
        "node": true,
        "es2020": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": "off",
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/no-var-requires": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double"],
    }
}