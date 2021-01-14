const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // handle incoming data from the server and log for the player
  conn.on('data', (data) => {
    console.log('Server: ', data);
  });
  // carry out events as soon as the connection is made
  conn.on('connect', () => {
    // log a message to the client on connecting
    console.log("Successfully connected to game server");
    // send player name/initials (max 3 alphanumerics)
    conn.write("Name: JJ");


    // // send "Move: up" command to server
    // const moving = () => {
    //   conn.write("Move: up");
    //   setTimeout(moving, 500);
    // }
    // setTimeout(moving, 500);
  });
  // conn.on('connect', () => {
  //   // send "Move: up" command to server on connection
  //   conn.write("Move: up");
  // });
  return conn;
};

module.exports = {connect};