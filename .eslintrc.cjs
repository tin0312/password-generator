module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "import", "jsx-a11y", "react-refresh", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: "detect" } },

  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    "linebreak-style": 1,
    quotes: ["error", "double"],
  },
};
