var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; i < 100; i++){
    if (Number(lines[i]) <= 10.0) {
        console.log(`A[${i}] = ${Number(lines[i]).toFixed(1)}`)
    }
}