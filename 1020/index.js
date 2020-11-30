var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let totalDays = lines[0];
let years = Math.floor(totalDays / 365);
let months;

if (years >= 1) totalDays -= (365*years);

months = Math.floor(totalDays / 30);

if (months >= 1) totalDays -= (30*months)

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${totalDays} dia(s)`);
