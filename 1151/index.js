var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let out = ''
let values = [0]

for(let i = 1; i < Number(lines[0]); i++){
    if(values[i-1] === 0) values.push(1)
    else values.push(values[i-1] + values[i-2])
}

out = String(values)

console.log(out.replace(/,/g, ' '))