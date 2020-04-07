const fs = require("fs");
var toRead = "./index.hss";


var read = fs.readFileSync(toRead).toString();
var s = read.split('\r\n')

console.log(s);

const dothis = string => { 
    if (string.startsWith('color')) {
        return `h1, h2, h3, h4, h5, h6, p, a {\ncolor: ${string.slice(6)};\n}`;
    } else if(string.startsWith("bg")) {
        return `h1, h2, h3, h4, h5, h6, p, a {\nbackground-color: ${string.slice(3)};\n}`
    } else if(string.startsWith("font")) {
        return `body {\nfont-family: ${string.slice(5)};\n}`;
    } else if(string.startsWith("center")) {
        return `body\n{\ntext-align: center;\n}`;
    } else if(string.startsWith("pre-height")) {
        return `pre\n{\nheight: ${string.slice(11)}px\n}`;
    } else if(string.startsWith("left")) {
        return `body\n{\ntext-align: left;\n}`;
    } else if(string.startsWith("right")) {
        return `body\n{\ntext-align: right;\n}`;
    } else if(string.startsWith("overline")) {
	return `body\n{\ntext-decoration: overline;\n}`;
    } else if(string.startsWith("line-through")) {
	return `body\n{\ntext-decoration: line-through;\n}`;
    } else if(string.startsWith("underline")) {
	return `body\n{\ntext-decoration: underline;\n}`;
    } else if(string.startsWith("uppercase")) {
	return `body\n{\ntext-transform: uppercase;\n}`;
    } else if(string.startsWith("lowercase")) {
	return `body\n{\ntext-transform: lowercase;\n}`;
    } else if(string.startsWith("capitalize")) {
	return `body\n{\ntext-transform: capitalize;\n}`;
    } else if(string.startsWith("bg-image")) {
        return `body\n{\nbackground-image: ./${string.slice(9)}\n`; 
    } else if(string.startsWith("bg-color")) {
        return `body\n{\nbackground-color: ${string.slice(9)}\n`; 
    }
};

fs.writeFileSync("styles.css", "/*built with hss*/\n" + s.map(dothis).join('\n'));
dothis(s[0])
