function loadModule(modulefolder, moduleName){
  return require(modulefolder + "/" + moduleName + "/" + moduleName);
}

module.exports = loadModule;