var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let a, b;

lines.map(item =>{
    a = Number(item.split(' ')[0])
    b = Number(item.split(' ')[1])

    if(a > b) console.log('Decrescente')
    if(b > a) console.log('Crescente')

    if(a === b) lines = []
})