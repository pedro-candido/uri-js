var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rounds = lines[0];
let mary = 0, john = 0;

let play = (rounds, lines) =>{
    if(parseInt(rounds) === 0) return null;

    mary = 0, john = 0;

    round = lines
        .slice(1)[0]
        .split(' ');
        
    round.map( roundItem =>{
        roundItem = parseInt(roundItem);
        if(roundItem === 0) mary += 1;
        if(roundItem === 1) john += 1;
    });

    console.log(`Mary won ${mary} times and John won ${john} times`);
    let newLine = lines.slice(2);
    play(newLine[0], newLine);
};

play(parseInt(rounds), lines);