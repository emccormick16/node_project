const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

pwd.pwdFunction();
// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  //cmd ='cat ls.js'
  const command = cmd.slice(0, 3);
  const filename = cmd.slice(4);
  cat.cat(filename);
  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
