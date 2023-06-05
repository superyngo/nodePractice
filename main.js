const readlineSync = require("readline-sync");

var module1 = require("./task1");
var module2 = require("./task2");
var module3 = require("./task3");

function showMenu() {
  const answer = readlineSync.question(
    "您要執行什麼？\n1. 任務1\n2. 任務2\n3. 任務3\n4. 離開\n"
  );

  if (answer === "1") {
    module1.task1();
    showMenu();
  } else if (answer === "2") {
    module2.task2();
    showMenu();
  } else if (answer === "3") {
    module3.task3();
    showMenu();
  } else if (answer === "4") {
    process.exit();
  } else {
    console.log(answer);
    showMenu();
  }
}

showMenu();
