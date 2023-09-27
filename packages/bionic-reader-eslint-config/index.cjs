module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    semi: "error",
    curly: ["error", "all"],
    "arrow-body-style": ["error", "as-needed"],
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2
      }
    ],
    "space-before-blocks": ["error", "always"],
    /** @see https://eslint.org/docs/latest/rules/padding-line-between-statements#rule-details */
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*"
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      },
      {
        blankLine: "always",
        prev: ["case", "default"],
        next: "*"
      },
      {
        blankLine: "always",
        prev: "if",
        next: "*"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if"
      }
    ],
    "quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      }
    ],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_"
      }
    ],
  }
}