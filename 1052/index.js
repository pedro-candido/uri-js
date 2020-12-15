var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let month = Number(lines[0]);

console.log(months[month + 1]);