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
            { test: /vendors\/a\.js/, loader: "imports?b,anotherNameOfB=b,somevalue=>{a:false}" },
            { test: /vendors\/c\.js/, loader: "imports?this=>window" }
        ]
    }
};