'use strict';
(function(){
  require('b');
  console.log("vendors/a.js");
  console.log("global b from vendors/a: ", b);
})();