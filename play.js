// Main file for launching the snake game client


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
  return conn;
}

console.log('Connecting ...');
connect();