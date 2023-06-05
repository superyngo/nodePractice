var fs = require("fs");

const readlineSync = require("readline-sync");

var answer = readlineSync.question("請問您的大名？\n");

fs.writeFileSync("my-name.txt", answer);

console.log("儲存成功。");

process.exit(0);
