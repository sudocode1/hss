const fs = require("fs");
const mam = require("more-array-methods");
var toRead = "./index.hss";


var read = fs.readFileSync(toRead).toString();
var s = read.split('\r\n')

console.log(s);
var font;

const dothis = string => { 
    if (string.startsWith('h1-color')) {
        return `h1 {\ncolor: ${string.slice(9)};\n}`;
    } else if(string.startsWith("h1-bg")) {
        return `h1 {\nbackground-color: ${string.slice(6)};\n}`
    }
};

fs.writeFileSync("styles.css", "/*built with hss*/\n" + s.map(dothis).join('\n'));
dothis(s[0])