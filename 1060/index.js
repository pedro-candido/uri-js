var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');
let positives = 0;

let verifyPositive = (line) => {
    if (!line) return null;
    if (line > 0) positives++
    lines.shift()
    verifyPositive(Number(lines[0]))
}

verifyPositive(Number(lines[0]))
console.log(`${positives} valores positivos`)