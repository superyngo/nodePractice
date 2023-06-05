const fs = require("fs");
const readlineSync = require("readline-sync");

let todos = JSON.parse(fs.readFileSync("todos.json"));
todosList = todos.map((todo, index) => `#${index} ${todo.title}`).join("\n");
// console.log(todosList);

const toDeleteIndex = readlineSync.question(
  `您要刪除哪個待辦事項？
${todosList}\n`
);
console.log(toDeleteIndex);
console.log("刪除事項：" + todos[toDeleteIndex].title);
todos.splice(toDeleteIndex, 1);
fs.writeFileSync("todos.json", JSON.stringify(todos));

process.exit(0);
