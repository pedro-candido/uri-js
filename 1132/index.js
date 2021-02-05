var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines[0])
let y = Number(lines[1])
let sum = 0;

if (x > y) {
    for (let i = y; i <= x; i++) {
        if (i % 13 !== 0) sum += i;
    }
}

if(x < y){
    for(let i = x; i <= y; i++){
        if (i % 13 !== 0) sum += i;
    }
}

console.log(sum)