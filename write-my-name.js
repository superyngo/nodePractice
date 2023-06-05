var fs = require("fs");

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("請問您尊姓大名?\n", function (answer) {
  fs.writeFile("my-name.txt", answer, function (err) {
    console.log("儲存成功");
    process.exit(0);
  });
});
