var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; i < 10; i++){
    if(Number(lines[i]) > 0) null
    else lines[i] = 1;

    console.log(`X[${Number(i)}] = ${Number(lines[i])}`)
}