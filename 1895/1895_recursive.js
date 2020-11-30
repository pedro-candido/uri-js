var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let initialCard = parseInt(lines[0].split(' ')[1]);
let limit = parseInt(lines[0].split(' ')[2]);
let player = 'b';
let points1 = 0,
    points2 = 0;

let play = (line, boardCard) => {
    if(parseInt(line.length) === 0) return null

    let equation = Math.abs(parseInt(boardCard) - parseInt(line[0]));
    if (parseInt(equation) <= parseInt(limit)) {
        boardCard = line[0];
        if (player == 'b') {
            player = 'a';
            points1 += equation;
        } else {
            player = 'b';
            points2 += equation;
        }
    }
    lines = line.slice(1);
    play(lines, boardCard);
};

lines = lines.slice(1)
play(lines, initialCard);

console.log(points1, points2);
