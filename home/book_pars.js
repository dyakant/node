const fs = require("fs");
const path = require("path");


const filePath = [__dirname, "1.txt"].join(path.sep);
const text = fs.readFileSync(filePath);
let textFormated = text
.replace(/[\.,]/gi, " ")
.replace(/\s+/gi, " ")
.split(" ");

//console.log(text.toString());
console.log('asdsad'.replace("a", "?"));
