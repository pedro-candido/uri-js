var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let seconds = lines[0];
let hours = Math.floor(seconds/3600);
let minutes = Math.floor((seconds - (hours*3600)) / 60)
let newSeconds = Math.floor(seconds % 60)

console.log(`${hours}:${minutes}:${newSeconds}`);

