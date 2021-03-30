const { people, ages } = require('./people');
//this was the example that we passed the functions from people
//DECONTRUCTED OF COURSE!!!

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());