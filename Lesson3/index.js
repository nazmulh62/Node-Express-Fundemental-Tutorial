// OS Module
//const { freemem } = require("os");
//console.log(os.userInfo());
//console.log(os);
//console.log(os.homedir());
//console.log(os.hostname());
//console.log(os.totalmem());
//console.log(os.freemem());
//console.log(freemem());


// Path Module

//console.log(__dirname);
//console.log(__filename);

const path = require("path");
//console.log(path);
// const extensionName = path.extname("index.html");
// console.log(extensionName);

// Join ar Maddhoma Url Join Kora Jai
const joinName = path.join(__dirname + "/../views");
console.log(joinName);