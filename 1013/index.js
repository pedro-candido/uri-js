var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');

let a = Number(values[0]),
    b = Number(values[1]),
    c = Number(values[2]);

let greatest = (a, b, c) => {
    if (a >= b && a >= c) return console.log(`${a} eh o maior`);
    if (b >= a && b >= c) return console.log(`${b} eh o maior`);
    if (c >= b && c >= a) return console.log(`${c} eh o maior`);
};

greatest(a, b, c);
