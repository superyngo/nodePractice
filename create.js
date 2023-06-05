const fs = require("fs");
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = JSON.parse(fs.readFileSync("todos.json"));
// console.log(todos);

readLine.question("您要新增什麼待辦事項？\n", function (answer) {
  todos.push({title: answer});

  fs.writeFileSync("todos.json", JSON.stringify(todos));
  console.log("新增事項:" + answer);
  process.exit(0);
});
