// Main file for launching the snake game client

const {connect} = require('./client');
const {setupInput} = require('./input');


console.log('Connecting ...');
connect();


setupInput();