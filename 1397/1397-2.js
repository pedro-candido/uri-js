var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rounds = Number(lines[0]),
    game = [],
    player1 = 0,
    player2 = 0,
    roundPlayer1 = 0,
    roundPlayer2 = 0;

while (rounds != 0) {
    (player1 = 0), (player2 = 0);
    for (let i = rounds; i !== 0; i--) {
        game = lines[i].split(' ');
        roundPlayer1 = Number(game[0]);
        roundPlayer2 = Number(game[1]);

        if (roundPlayer1 > roundPlayer2) player1 += 1;
        if (roundPlayer1 < roundPlayer2) player2 += 1;

        rounds--;
    }

    console.log(player1, player2);
    lines = lines.slice(Number(lines[0]) + 1);
    rounds = Number(lines[0]);
}
