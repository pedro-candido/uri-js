var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift()

let cobaias = 0
let coelhos = 0, ratos = 0, sapos = 0;

if (lines !== [] || lines !== null) {
    lines.map(item => {
        if (item.split(' ')[1] === 'R' || item.split(' ')[1] === 'R\r') {
            ratos += Number(item.split(' ')[0])
        };
        if (item.split(' ')[1] === 'C' || item.split(' ')[1] === 'C\r') {
            coelhos += Number(item.split(' ')[0])
        };
        if (item.split(' ')[1] === 'S' || item.split(' ')[1] === 'S\r') {
            sapos += Number(item.split(' ')[0])
        }
        cobaias += Number(item.split(' ')[0]);
    })
}

console.log(`Total: ${cobaias} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${((100 * coelhos) / cobaias).toFixed(2)} %`)
console.log(`Percentual de coelhos: ${((100 * ratos) / cobaias).toFixed(2)} %`)
console.log(`Percentual de coelhos: ${((100 * sapos) / cobaias).toFixed(2)} %`)