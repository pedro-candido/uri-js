var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift()

while(true){
    if(lines.length === 0 || lines === '[]' || lines === [] || lines[0] === '') return false;
    let perfectVerify = Number(lines[0])
    let count = 1;
    let dividers = [];
    
    for(count; count < perfectVerify; count++){
        if(perfectVerify % count === 0) {
            dividers.push(count);
        }
    }

    if(dividers.length !== 0){
        if(dividers.reduce((x, y) => x+y) === perfectVerify) console.log(`${perfectVerify} eh perfeito`)
        else console.log(`${perfectVerify} nao eh perfeito`)
    }
    else console.log(`${perfectVerify} nao eh perfeito`)
    lines.shift();
}