function loadModule(moduleName){
  switch (moduleName) {
    case "M1": return require("bundle!./modules/M1/M1");
    case "M2": return require("bundle!./modules/M2/M2");
    case "M3": return require("bundle!./modules/M3/M3");
    case "M4": return require("bundle!./modules/M4/M4");
    case "M5": return require("bundle!./modules/M5/M5");
    case "M6": return require("bundle!./modules/M6/M6");
    default: return null;
  }
  
}

module.exports = loadModule;