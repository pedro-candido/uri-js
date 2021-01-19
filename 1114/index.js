var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let verifyPassword = (line) =>{
    if(Number(line) === 2002) return console.log('Acesso Permitido')

    console.log('Senha Invalida')
    lines.shift()
    verifyPassword(lines[0])
}

verifyPassword(lines[0])