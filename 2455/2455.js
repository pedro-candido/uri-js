var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

let peso1 = lines[0];
let comprimento1 = lines[1];
let mult1 = peso1*comprimento1;

let peso2 = lines[2];
let comprimento2 = lines[3];
let mult2 = peso2*comprimento2;

if(mult1 === mult2){
    console.log(0);
} else{
    if(mult1 < mult2){
        console.log(1);
    }
    else{
        console.log(-1);
    }
}
