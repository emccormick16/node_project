//Output a prompt
const pwdFunction = function () {
  console.log(process.cwd());
  process.stdout.write("prompt > ");
};

module.exports = {
  pwdFunction,
};
