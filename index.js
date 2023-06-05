const create = require("./create.js");
const read = require("./read.js");
const deleteTodo = require("./delete.js");
const update = require("./update.js");
const readlineSync = require("readline-sync");

const showMenu = function () {
  const command = readlineSync.question(
    `您要執行下列什麼指令？
1. 建立待辦事項
2. 讀取待辦事項
3. 更新待辦事項
4. 刪除待辦事項
5. 離開\n`
  );
  console.log("command", command);
  switch (command) {
    case "1":
      create();
      showMenu();
    case "2":
      read();
      showMenu();
    case "3":
      update();
      showMenu();
    case "4":
      deleteTodo();
      showMenu();
    case "5":
      console.log("exit");
      process.exit();
    default:
      showMenu();
  }
};
showMenu();
