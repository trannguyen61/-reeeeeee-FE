module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  globals: {
    axios: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  'rules': {
    'no-multi-spaces': ['error']
  }
};
