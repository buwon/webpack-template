module.exports = {
  "env": {
    "es6": true,
    "mocha": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion":  9,
    "sourceType":  'module',  // Allows for the use of imports
  },
  "plugins": [
    "prettier",
  ],
  "extends": [
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "printWidth": 120,
      "singleQuote": true,
      "trailingComma": "es5"
    }],
    "require-jsdoc": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-member-accessibility": "off"
  },
};