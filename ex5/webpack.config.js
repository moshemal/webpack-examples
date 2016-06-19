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
        "b$": "vendors/b",
        "c$": "vendors/c"      }
    },
    module: {
        loaders: [
            { test: /vendors\/a\.js/, loader: "imports?c,b,anotherNameOfB=b,somevalue=>{a:false}" },
            { test: /vendors\/c\.js/, loader: "exports?c" }
        ]
    }
};