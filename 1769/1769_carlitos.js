var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let cpf = lines[0].split('.').join('').split('-');
    let b1 = 0,
        b2 = 0,
        d1,
        d2,
        resto;
    console.log(cpf);
    cpf[0] = cpf[0].split('');

    cpf[0].map((el, i) => {
        b1 += el * (i + 1);
        b2 += el * (cpf[0].length - i);
    });

    d1 = b1 % 11;
    d2 = b2 % 11;

    d1 === 10 ? (d1 = 0) : 0;
    d2 === 10 ? (d2 = 0) : 0;

    var lastDigit = String(cpf[1]);

    resto = `${d1}${d2}`;
    resto = String(resto);
    lastDigit === resto
        ? console.log('CPF valido')
        : console.log('CPF invalido');

    lines.splice(0, 1);
    if (!lines.length) return false;
}
