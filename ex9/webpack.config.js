const path = require("path");
module.exports = {
    entry: "main.js",
    resolve: {
      root: [path.resolve("./")],
    },
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    }
};