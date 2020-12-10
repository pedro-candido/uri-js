var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let initial = Number(lines[0].split(' ')[0]);
let final = Number(lines[0].split(' ')[1]);

initial > final ? console.log(`O JOGO DUROU ${24 - initial + final} HORA(S)`) : initial < final ? console.log(`O JOGO DUROU ${final - initial} HORA(S)`) : console.log(`O JOGO DUROU ${24} HORA(S)`)
