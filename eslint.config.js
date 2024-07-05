module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      indent: ["error", 2],
    },
  },
];
  