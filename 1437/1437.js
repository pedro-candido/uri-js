var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// ANCHOR Complete


const initialDirection = 'N';
let direction = initialDirection;

let moveOn = (lines) => {
    if (parseInt(lines[0]) === 0) {
        return null;
    } else {
        let move = lines[1];
        move = move.split('');
        direction = 'N';
        move.map((item) => {
            switch (direction) {
                case 'N':
                    if (item === 'D') direction = 'L';
                    if (item === 'E') direction = 'O';
                    break;
                case 'L':
                    if (item === 'D') direction = 'S';
                    if (item === 'E') direction = 'N';
                    break;
                case 'S':
                    if (item === 'D') direction = 'O';
                    if (item === 'E') direction = 'L';
                    break;
                case 'O':
                    if (item === 'D') direction = 'N';
                    if (item === 'E') direction = 'S';
                    break;
            }
        });
        console.log(direction);
        lines = lines.slice(2);
        moveOn(lines);
    }
};

moveOn(lines);