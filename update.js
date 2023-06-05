const fs = require("fs");
const readlineSync = require("readline-sync");
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = JSON.parse(fs.readFileSync("todos.json"));
todosList = todos.map((todo, index) => `#${index} ${todo.title}`).join("\n");
// console.log(todosList);

const toUpdateIndex = readlineSync.question(
  `您要更新哪個待辦事項？
${todosList}\n`
);

const toUpdateContent = readlineSync.question(`您想把內容更新成什麼？`);

todos[toUpdateIndex].title = toUpdateContent;
console.log("更新事項：" + toUpdateContent);
fs.writeFileSync("todos.json", JSON.stringify(todos));
