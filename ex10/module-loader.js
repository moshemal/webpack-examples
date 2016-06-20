function loadModule(moduleName){
  return require("bundle!./modules/" + moduleName + "/" + moduleName);
}

module.exports = loadModule;