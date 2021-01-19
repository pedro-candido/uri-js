var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = 0,
    impares = 0,
    positivos = 0,
    negativos = 0;

for(let i = 0; i < 5; i++){
    if (Number(lines[i]) % 2 === 0) pares++;
    else impares++;
    if (Number(lines[i]) > 0) positivos++;
    else if (Number(lines[i]) < 0) negativos++;
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);