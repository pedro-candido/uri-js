var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');
// ANCHOR Complete

let sum0 = 0,
    count = 0,
    sum1 = 0,
    ana = 0,
    beto = 0,
    clara = 0;

// While to run the program by EOF
while (count < lines.length) {
    let game = (line) => {
        (sum0 = 0), (sum1 = 0);
        let round = line.split(' ');
        ana = parseInt(round[0]);
        beto = parseInt(round[1]);
        clara = parseInt(round[2]);

        if (
            (ana === beto && beto === clara)
        )
            return console.log('*');

        if (
            (ana === 0 && beto === 1 && clara === 1) ||
            (ana === 1 && beto === 0 && clara === 0)
        )
            return console.log('A');

        if (
            (ana === 1 && beto === 0 && clara === 1) ||
            (ana === 0 && beto === 1 && clara === 0)
        )
            return console.log('B');
        if (
            (ana === 1 && beto === 1 && clara === 0) ||
            (ana === 0 && beto === 0 && clara === 1)
        )
            return console.log('C');
    };

    game(lines[count]);
    count += 1;
}