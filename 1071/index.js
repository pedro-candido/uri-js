var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let maior, menor;
let soma = 0;

if(lines[0]>lines[1]) maior = Number(lines[0]), menor = Number(lines[1]);
else maior = Number(lines[1]), menor = Number(lines[0]);

for(let i = menor+1; i < maior; i++ ){
    if(i < 0 ? (i*-1) % 2 === 1: i % 2 === 1) soma = soma + i;
}

console.log(soma);