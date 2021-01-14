// Main file for launching the snake game client

const {connect} = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface
 * Specifically to handle user input via stdin
 **/

// Function to handle Ctrl + C user input
const handleUserInput = (keyPress) => {
  // enable ctrl + c to terminate the program
  // \u0003 maps to ctrl+c input
  if (keyPress === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

setupInput();