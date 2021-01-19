var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = 0;

for(let i = 0; i < 5; i++){
    if (Number(lines[i]) % 2 === 0) pares++;
}

console.log(`${pares} valores pares`);