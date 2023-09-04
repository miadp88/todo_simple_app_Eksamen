module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    "no-trailing-spaces": "error",
    "comma-dangle": ["error", "always-multiline"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-extra-parens": "error",
  },
};
