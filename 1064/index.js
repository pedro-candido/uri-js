var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let positiveCount = 0;
let positiveValues = [];

let positiveCheck = (line) => {
    if(!line || line === 'NaN') return null
    if (line > 0) {
        positiveCount++;
        positiveValues.push(line)
    }
    lines.shift()
    positiveCheck(Number(lines[0]).toFixed(1))
}

positiveCheck(Number(lines[0]).toFixed(1))
console.log(`${positiveCount} valores positivos`)
let average = 0;
positiveValues.map(item => {
    average += Number(item);
})
average /= positiveCount
console.log(average.toFixed(1))