const net = require('net');
const {IP, PORT, NAME} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
    conn.write(NAME);
  });
  return conn;
};

module.exports = {connect};