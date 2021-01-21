var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x,y

lines.forEach(item =>{
    x = Number(item.split(' ')[0])
    y = Number(item.split(' ')[1])

    if(x > 0 && y > 0) console.log('primeiro')
    if(x > 0 && y < 0) console.log('quarto')
    if(x < 0 && y < 0) console.log('terceiro')
    if(x < 0 && y > 0) console.log('segundo')
})