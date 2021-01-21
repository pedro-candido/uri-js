var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let j = 60;

for(let i = 1; j >= 0; i+=3){
    console.log(`I=${i} J=${j}`)
    j -= 5
}