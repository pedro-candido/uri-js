var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let bhaskaraValues = lines[0].split(' ');
let a = parseFloat(bhaskaraValues[0]);
let b = parseFloat(bhaskaraValues[1]);
let c = parseFloat(bhaskaraValues[2]);

let delta = Math.pow(b, 2) - 4 * a * c;
if (delta <= 0 || a <= 0) console.log('Impossivel calcular');
else {
    let r1, r2;
    r1 = (-b + Math.sqrt(delta)) / (2 * a);
    r2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}
