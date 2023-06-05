var fs = require("fs");

var data = fs.readFileSync("my-name.txt");

console.log("您好，" + data);

process.exit(0);
