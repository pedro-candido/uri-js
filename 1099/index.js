var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift()

let a,b;
let soma = 0;

lines.map((item) =>{
    soma = 0
    a = item.split(' ')[0];
    b = item.split(' ')[1];

    if(a > b){
        for(let i = b; i <= a; i++){
            if(i%2 === 1) soma += i
            console.log(soma)
        }
    }

})