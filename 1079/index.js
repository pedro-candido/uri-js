var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift()

while (true) {
    if (!lines[0]) return false

    let line = lines[0].split(' ')
    let sum = 0;
    line.forEach((item, index) => {
        if(index == 0) sum += Number(item) * 2
        if(index == 1) sum += Number(item) * 3
        if(index == 2) sum += Number(item) * 5
    })

    console.log(`${(sum / 10).toFixed(1)}`)
    sum = 0
    lines.shift()
}