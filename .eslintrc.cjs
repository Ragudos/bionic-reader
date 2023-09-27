module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
    project: [
      "./tsconfig.eslint.json",
      "./packages/*/tsconfig.json"
    ]
  },
  ignorePatterns: [
    "packages/bionic-reading-eslint-config",
    "packages/bionic-reading-prettier-config"
  ],
  extends: [
    "@bionic-reader/eslint-config",
    "plugin:prettier/recommended"
  ]
};