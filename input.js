/**
 * Setup User Interface
 * Specifically to handle user input via stdin
 **/

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
  // enable WASD movement
  // send "Move: __" command accordingly
  if (keyPress === 'w') {
    connection.write("Move: up");
  } else if (keyPress === 'a') {
    connection.write("Move: left");
  } else if (keyPress === 's') {
    connection.write("Move: down");
  } else if (keyPress === 'd') {
    connection.write("Move: right");
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