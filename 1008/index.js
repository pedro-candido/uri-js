var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let workerNumber = lines[0];
let workTime = Number(lines[1]);
let hourWorkedPrice = Number(lines[2]);

console.log(
    `NUMBER = ${workerNumber}\nSALARY = U$ ${(workTime * hourWorkedPrice).toFixed(
        2
    )}`
);
