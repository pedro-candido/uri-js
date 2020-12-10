var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let initHour = Number(lines[0].split(' ')[0]);
let initMinute = Number(lines[0].split(' ')[1]);
let finalHour = Number(lines[0].split(' ')[2]);
let finalMinute = Number(lines[0].split(' ')[3]);

let minute = 0;

let hour =
    finalHour - initHour < 0
        ? 24 + (finalHour - initHour)
        : finalHour - initHour;

if (finalMinute - initMinute < 0) {
    minute = 60 + (finalMinute - initMinute);
    if (hour === 0) hour = 24 - 1;
    else hour = hour - 1;
} else minute = finalMinute - initMinute;

if (initHour === finalHour && initMinute === finalMinute)
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
else console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`);
