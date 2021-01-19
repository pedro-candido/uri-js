var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for (let line = 1; line <= Number(lines[0]); line++) {
    if (Number(lines[line]) > 0) {
        if (Number(lines[line]) % 2 === 0) console.log('EVEN POSITIVE')
        else console.log('ODD POSITIVE')
    }
    if (Number(lines[line]) < 0) {
        if (Number(lines[line]) % 2 === 0) console.log('EVEN NEGATIVE')
        else console.log('ODD NEGATIVE')
    }
    if (Number(lines[line]) === 0) console.log('NULL')
}