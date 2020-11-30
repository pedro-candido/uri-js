var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rounds = parseInt(lines[0]);
let player1 = 0,
    player2 = 0,
    storeA = 0,
    storeB = 0,
    game = [];

let match = (rounds, line) => {
    (player1 = 0), (player2 = 0);
    if (rounds !== 0) {
        for (let count = 1; count <= rounds; count++) {
            game = line[count].split(' ');
            storeA = parseInt(game[0]);
            storeB = parseInt(game[1]);

            if (storeA !== storeB) {
                if (storeA > storeB) player1 += 1;
                if (storeB > storeA) player2 += 1;
            }
        }
        console.log(parseInt(player1), parseInt(player2));

        let newLine = line.slice(rounds + 1);
        rounds = parseInt(line.slice(rounds + 1)[0]);

        match(rounds, newLine);
    }
};

match(rounds, lines);
