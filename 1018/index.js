var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let value = Number(lines[0]);
let notas = [100, 50, 20, 10, 5, 2, 1];
let aux;

console.log(value)

notas.map((item) => {
    aux = parseInt(Number(value) / item);
    console.log(`${aux} nota(s) de R$ ${item},00`);
    value %= item;
});
