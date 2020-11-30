var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let falseCount = 0;
    let bag = lines[1].split(' ');
    let newArr = [];

    for (let i = 0; i < bag.length; i++) {
        for (let j = i + 1; j < bag.length; j++) {
            if (parseInt(bag[i]) === parseInt(bag[j])) {
                if (!newArr.find((element) => element === bag[i])) {
                    falseCount += 1;
                } 
                newArr.push(bag[i]);
            }
        }
    }

    console.log(falseCount);

    lines.splice(0, 2);
    newArr = [];
    if (lines[0] === '0 0') return false;
}
