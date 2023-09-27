import terser from "@rollup/plugin-terser";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: {
    index: "build/index.js"
  },
  output: [
    {
      dir: "dist",
      format: "module",
      inlineDynamicImports: true,
    }
  ],
  plugins: [
    terser(),
    babel({ babelHelpers: "bundled" }),
    nodeResolve(),
    json(),
    commonjs()
  ]
};
