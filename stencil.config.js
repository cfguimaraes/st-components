let sass = require("@stencil/sass");

exports.config = {
  namespace: "st-components",
  globalStyle: ["src/globals/styles.scss"],
  plugins: [
    sass({
      injectGlobalPaths: ["./src/globals/variables.scss"]
    })
  ],

  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
