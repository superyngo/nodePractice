module.exports = function () {
  const fs = require("fs");
  const readlineSync = require("readline-sync");
  var colors = require("colors");

  let todos = JSON.parse(fs.readFileSync("todos.json"));

  const addTodo = readlineSync.question(
    colors.green("您要新增什麼待辦事項？\n")
  );

  todos.push({title: addTodo});

  fs.writeFileSync("todos.json", JSON.stringify(todos));
  console.log("新增事項:" + colors.red.underline(addTodo));
};
