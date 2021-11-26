const { isString } = require("lodash");

let sum = function(a,b){
  if (isString(a)||isString(b)){
    throw new TypeError()   
    }else{
      return a + b;  
    }
};
module.exports = sum;
