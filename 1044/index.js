var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');

values[1] % values[0] === 0 || values[0] % values[1] === 0? console.log("Sao Multiplos") : console.log("Nao sao Multiplos");