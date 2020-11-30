var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rounds = Number(lines[0]),
    player1 = 0,
    player2 = 0,
    storeA = 0,
    storeB = 0,
    game = [];

let match = (rounds, line) => {
    (player1 = 0), (player2 = 0);

    if (rounds !== 0) {
        for (let count = 1; count <= rounds; count++) {
            game = line[count].split(' ');
            (storeA = Number(game[0])), (storeB = Number(game[1]));

            if (storeA !== storeB) {
                storeA > storeB ? player1++ : player2++;
            }
        }
        console.log(Number(player1), Number(player2));

        let newLine = line.slice(rounds + 1);
        rounds = Number(line.slice(rounds+1)[0]);

        match(rounds, newLine);
    }
};

match(rounds, lines);
