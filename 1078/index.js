var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let tabuadaArr = new Array(10)

for(let index = 1; index <= tabuadaArr.length; index++){
    console.log(`${index} x ${Number(lines[0])} = ${(index)*Number(lines[0])}`)
}