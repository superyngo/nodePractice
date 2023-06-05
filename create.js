const fs = require("fs");
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.readFile("todos.json", function (error, data) {
  let todos = JSON.parse(data);

  readLine.question("您要新增什麼待辦事項？\n", function (answer) {
    todos.push({title: answer});

    fs.writeFile("todos.json", JSON.stringify(todos), function (err) {
      console.log("新增事項:" + answer);
      process.exit(0);
    });
  });
});
