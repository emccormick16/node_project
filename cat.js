const fs = require("fs");

function cat(filename) {
  fs.readFile("./" + filename, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
