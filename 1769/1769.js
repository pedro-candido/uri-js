var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let aux,
        aux1 = 0,
        aux2 = 0;

    let a = lines[0].split('-'),
        b;
    a[0] = a[0].split('.').join('');
    a[0] = a[0].split('');

    b = a[1];
    b = b.split('');

    a[0].map((number, index) => {
        aux1 += number * (index + 1);
        aux2 += number * (a[0].length - index);
    });

    aux1 = aux1 % 11;
    aux2 = aux2 % 11;

    aux1 === 10 ? (aux1 = 0) : 0;
    aux2 === 10 ? (aux2 = 0) : 0;

    aux = `${aux1}${aux2}`;

    b[0] = b[0] + b[1];
    b.pop();

    b[0] === aux ? console.log('CPF valido') : console.log('CPF invalido');

    lines.splice(0, 1);
    if (!lines[0]) return false;
}
