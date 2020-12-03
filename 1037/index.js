var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let interval = parseFloat(lines[0]);
if (interval < 0 || interval > 100) console.log('Fora de intervalo');
if (interval >= 0 && interval <= 25.00) console.log('Intervalo [0,25]');
if (interval > 25.00 && interval <= 50.00) console.log('Intervalo (25,50]');
if (interval > 50.00 && interval <= 75.00) console.log('Intervalo (50,75]'); 
if (interval > 75.00 && interval <= 100.00) console.log('Intervalo (75,100]');