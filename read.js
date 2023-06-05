module.exports = function () {
  const fs = require("fs");

  const jsonData = JSON.parse(fs.readFileSync("todos.json"));
  console.log("您的待辦事項");
  for (let [index, i] of jsonData.entries()) {
    console.log(`#${index} ${i.title}`);
  }
  console.log("\n");
};
