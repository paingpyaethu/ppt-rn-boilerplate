/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
        },
        extensions: [".js", ".json"],
        root: ["./src"],
      },
    ],
    "@babel/plugin-transform-export-namespace-from",
    "react-native-worklets/plugin",
  ],
  presets: ["module:@react-native/babel-preset"],
};
