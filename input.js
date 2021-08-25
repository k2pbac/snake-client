let connection;

const setupInput = function (conn) {
  connection = conn;
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
    else if(key[0] === '\u0077'){
      // console.log("W pressed");
      connection.write('Move: up');
    } 
    else if(key[0] === '\u0061'){
      // console.log("A pressed");
      connection.write('Move: left');
    }
    else if(key[0] === '\u0064') {
      // console.log("D pressed");
      connection.write('Move: right');
    }
    else if(key[0] === '\u0073'){
      // console.log("S pressed");
      connection.write('Move: down');
    }
  
  return key;
};


module.exports = {
  setupInput
}