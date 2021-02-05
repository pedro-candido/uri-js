var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines[0]);
let y = Number(lines[1]);
let greater = x > y ? x: y
let count = x < y ? x+1 : y+1

while(count !== greater){
    if(count % 5 === 2 || count % 5 === 3) console.log(count)
    count++;
}