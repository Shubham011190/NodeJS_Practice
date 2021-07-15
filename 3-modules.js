//Modules
const names = require('./4-names');
const sayHi = require('./5-util');
const addition = require('./6-addition');       //Works without exporting because of the function call. Check 6-addition.
// console.log(names);

sayHi('Anushka');
sayHi(names.shubham);
sayHi(names.singhal);
