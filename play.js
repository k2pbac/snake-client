const {connect} = require("./client");
const {setupInput} = require("./input.js");





setupInput();

console.log("Connecting ...");
connect();

