const path = require('path');

//separator
console.log(path.sep);

//filePath
const filePath = path.join('/content','/subfolder','test.txt');
console.log(filePath);

//base
const basename = path.basename(filePath);
console.log(basename);

//absolute path
const absolute_path = path.resolve(__dirname, 'content','subfolder','text.txt');
console.log(absolute_path);