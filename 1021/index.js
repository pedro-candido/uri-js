var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let value = Number(lines[0])
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
let aux;

console.log('NOTAS:');

notas.map((item) => {
    aux = parseInt(Number(value) / item);
    console.log(`${aux} nota(s) de R$ ${item.toFixed(2)}`);
    value %= item;
});

console.log('MOEDAS:')

moedas.map((item) =>{
    aux = parseInt(Number(value) / item);
    console.log(`${aux} moeda(s) de R$ ${item.toFixed(2)}`);
    value = parseFloat(value % item).toFixed(2);
})
