var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let average = 0;
let countValid = 0;

lines.forEach(nota =>{
    if(Number(nota) > 10 || Number(nota) < 0) {
        console.log('nota invalida')
    }
    else if(countValid !== 2){
        average += Number(nota)
        countValid += 1;
        if(countValid === 2){
            console.log(`media = ${(average/countValid).toFixed(2)}`);
        }
    }
})

