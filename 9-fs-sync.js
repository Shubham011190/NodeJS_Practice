const {readFileSync, writeFileSync}  = require('fs');

//reading a file
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first, second);

//Writing on a file. Creates a new file if not already present.
writeFileSync('./content/result.txt',`Result : ${first}, ${second}`);