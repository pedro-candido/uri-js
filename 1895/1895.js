var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let roundsNumber = parseInt(lines[0].split(' ')[0]);
let initialCard = parseInt(lines[0].split(' ')[1]);

let limit = parseInt(lines[0].split(' ')[2]);

let player = 'b';
let points1 = 0,
    points2 = 0;


if (roundsNumber % 2 === 1) {
    lines.splice(0, 1);
    while (true) {
        let game = lines;
        let equation = Math.abs(parseInt(initialCard) - parseInt(game[0]));
        if (parseInt(equation) <= parseInt(limit)) {
            initialCard = game[0];
            if (player === 'a') {
                player = 'b';
                points2 += equation;
            } else {
                player = 'a';
                points1 += equation;
            }
        }
        lines.splice(0, 1);

        if (!lines[0]) {
            console.log(points1, points2);
            return false;
        }
    }
}
