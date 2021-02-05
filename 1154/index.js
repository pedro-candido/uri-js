var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let average = 0;
let count = 0;
while(true){
    if(lines[0] < 0) {
        console.log((average/count).toFixed(2))
        return false;
    }

    average += Number(lines[0])
    count += 1

    lines.shift()
}
