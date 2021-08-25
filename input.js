const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput));

  return stdin;
};


const handleUserInput = (...key) => {

    if (key[0] === '\u0003') {
      process.exit();
    }
  
  return key;
};


module.exports = {
  setupInput
}