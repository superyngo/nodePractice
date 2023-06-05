const fs = require("fs");
fs.readFile("todos.json", function (err, data) {
  const jsonData = JSON.parse(data);
  console.log("您的待辦事項");
  for (let [index, i] of jsonData.entries()) {
    console.log(`#${index} ${i.title}`);
  }
  process.exit(0);
});
