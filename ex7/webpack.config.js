const path = require('path');

module.exports = {
    entry: "./M1/M1.js",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    },
    resolve: {
      root: [path.resolve("./")],
      alias: {
        "a$": "vendors/a",
        "b$": "vendors/b"
      }
    },
    module: {
        loaders: [
            { test: /vendors\/b\.js/, loader: "script" }
        ]
    }
};