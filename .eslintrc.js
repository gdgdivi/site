const alias = require("./module-resolver-config.js")

module.exports = {
  extends: [
    "standard",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors"
  ],
  plugins: ["react", "jest", "prettier", "jsx-a11y"],
  env: {
    "jest/globals": true
  },
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-no-undef": "error",
    "react/react-in-jsx-scope": "error",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true }
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ],
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    "import/resolver": {
      "babel-module": alias
    }
  }
}
