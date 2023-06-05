var fs = require("fs");
fs.readFile("my-name.txt", function (err, data) {
  console.log("您好" + data);
  process.exit(0);
});
