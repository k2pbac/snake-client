const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: '50542'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  
  // conn.on('connect', () => {
  //   let count = 0;
  //  let id= setInterval( () => {
  //   conn.write('Move: up');
  //   count+=500;
  // },500 + count);
  // })

  return conn;
};


module.exports = {
  connect
}

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)