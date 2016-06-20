loadModule = require("./module-loader");

console.log(loadModule("./modules", "M1") + " is loaded from main.js");