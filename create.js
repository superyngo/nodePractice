const fs = require("fs");
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
var colors = require("colors");

let todos = JSON.parse(fs.readFileSync("todos.json"));

readLine.question(colors.green("您要新增什麼待辦事項？\n"), function (answer) {
  todos.push({title: answer});

  fs.writeFileSync("todos.json", JSON.stringify(todos));
  console.log("新增事項:" + colors.red.underline(answer));
  process.exit(0);
});
