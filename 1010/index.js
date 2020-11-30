var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let firstTool = lines[0].split(' ');
let secondTool = lines[1].split(' ');

firstTool.shift();
secondTool.shift();

let total = Number(firstTool[0]) * Number(firstTool[1]);
total += Number(secondTool[0]) * Number(secondTool[1]);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
