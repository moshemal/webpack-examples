module.exports = {
    entry: "./M1/M1.js",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /vendors\/c\.js/, loader: "imports?this=>window" }
        ]
    }
};