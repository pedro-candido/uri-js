var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let a,b = 0;
let sum = 0;
let values = ''

lines.map(item =>{
    sum = 0
    a = 0, b = 0
    values = ''

    a = Number(item.split(' ')[0])
    b = Number(item.split(' ')[1])
    if(a > 0 && b > 0){
        if(a < b){
            for(let i = a; i <= b; i++){
                sum += i
                values += `${i} `
            }
        }

        if(a > b){
            for(let i = b; i <= a; i++){
                sum += i
                values += `${i} `
            }
        }

        if(a === b){
            sum += a
            values += `${a} ` 
        }
        console.log(`${values}Sum=${sum}`)
    }
})
