var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);

let galhos = Number((b / 2).toFixed(0));
if(galhos % 2 === 1) galhos -= 1;

if( a >= galhos) console.log('Amelia tem todas bolinhas!');

if(a < galhos) console.log(`Faltam ${galhos-a} bolinha(s)`);