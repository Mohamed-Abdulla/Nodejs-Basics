const path = require("path");

console.log(path.sep); //root path

//!filepath
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);
//!base last file
const base = path.basename(filePath);
console.log(base);
//!absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
