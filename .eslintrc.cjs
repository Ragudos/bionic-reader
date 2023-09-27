module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
  },
  extends: ["@bionic-reader/eslint-config", "plugin:prettier/recommended"],
};
