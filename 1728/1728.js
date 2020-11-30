var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let firstValue = 0,
    secondValue,
    result,
    sum = 0;

let invertString = (value) => {
    return value.split('').reverse().join('');
};

while (true) {
    result = lines[0].split('=')[1];
    firstValue = lines[0].split('+')[0];
    secondValue = lines[0].split('+')[1].split('=')[0];

    result = parseInt(invertString(result));
    firstValue = parseInt(invertString(firstValue));
    secondValue = parseInt(invertString(secondValue));

    sum = firstValue + secondValue;
    sum === result ? console.log('True') : console.log('False');

    lines.splice(0, 1);
    if(!lines[0]) return false;
}