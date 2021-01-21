const { firebrick } = require('color-name');

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let qtd = Number(lines[0]) * 4

for (let i = 1; i <= qtd; i+=4){
    console.log(`${i} ${i+1} ${i+2} PUM`)
}