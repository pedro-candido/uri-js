var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let combustivel = {
    alcool: 0, gasolina: 0, diesel: 0
}

lines.map(numero =>{
    numero = Number(numero)
    if(numero === 1) combustivel.alcool += 1
    if(numero === 2) combustivel.gasolina += 1
    if(numero === 3) combustivel.diesel += 1
})

console.log('MUITO OBRIGADO')
console.log(`Alcool: ${combustivel.alcool}`)
console.log(`Gasolina: ${combustivel.gasolina}`)
console.log(`Diesel: ${combustivel.diesel}`)