/**
 * Setup User Interface
 * Specifically to handle user input via stdin
**/

const messages = require('./constants');

// Stores the active TCP connection object
// used to write messages to the server
// outer-most scope for access by all functions
let connection;

// Function to handle user input
const handleUserInput = (keyPress) => {
  // enable ctrl + c to terminate the program
  // \u0003 maps to ctrl+c input
  if (keyPress === '\u0003') {
    process.exit();
  }
  // Select and send message to the server based on keyPress
  // WASD movement enabled
  // Canned messages to everyone enabled with U,J,H,I,N
  const letter = keyPress.toUpperCase();
  // Handle unassigned keyPress
  // Only write to server if valid message key
  if (messages[letter]) {
    connection.write(messages[letter]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};