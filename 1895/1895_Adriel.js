var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    if (!lines || lines.length === 0) break;
    const splited = lines.shift().split(' ');

    let lengthToGo,
        tableCard,
        limit,
        alicePoints = 0,
        bobPoints = 0,
        isTurnOf = 0; // 0 (alice); 1 (bob)

    if (splited.length > 1) {
        lengthToGo = splited.shift();
        tableCard = parseInt(splited.shift());
        limit = parseInt(splited.shift());
        let nextOnStack;
        while (true) {
            nextOnStack = parseInt(lines.shift());
            const result = Math.abs(tableCard - nextOnStack);
            if (result <= limit) {
                if (isTurnOf === 0) {
                    alicePoints += result;
                    isTurnOf = 1;
                } else {
                    bobPoints += result;
                    isTurnOf = 0;
                }
                if (lines[0] && lines[0].split(' ').length !== 3) {
                    tableCard = nextOnStack;
                } else {
                    console.log(alicePoints, bobPoints);
                    break;
                }
            }
        }
    }
}
