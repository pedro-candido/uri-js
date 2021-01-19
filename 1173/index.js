var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let firstValue = Number(lines[0])
let vetor = new Array(10)

for(let i = 0; i<vetor.length;i++){
    if(i === 0) vetor[i] = firstValue
    else vetor[i] = (vetor[i-1]) * 2

    console.log(`N[${i}] = ${vetor[i]}`)
}

