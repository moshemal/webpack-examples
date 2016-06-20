function loadModule(moduleName){
  return require("./modules/" + moduleName + "/" + moduleName);
}

module.exports = loadModule;