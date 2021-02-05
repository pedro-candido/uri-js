var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift();

let initial, final;
let sum = 0;

while (true) {
    if (!lines[0]) return false;
    if(lines[0].split(' ').length === 1) lines.shift()
    sum = 0;

    if (Number(lines[0].split(' ')[0]) >= Number(lines[0].split(' ')[1])) {
        initial = Number(lines[0].split(' ')[1]);
        final = Number(lines[0].split(' ')[0]);
    }
    else {
        final = Number(lines[0].split(' ')[1]);
        initial = Number(lines[0].split(' ')[0]);
    }

    for (let i = initial + 1; i < final; i++) {
        if (i % 2 === 1) sum += i;
    }

    console.log(sum);

    lines.shift();
}