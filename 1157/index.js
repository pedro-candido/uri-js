var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = Number(input.split('\n')[0]);

for(let i = 1; i <= lines; i++){
    if(lines % i === 0) console.log(i)
}
