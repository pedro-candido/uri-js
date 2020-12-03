var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let grades = lines[0].split(' ');

let n1 = parseFloat(grades[0]) * 2,
    n2 = parseFloat(grades[1]) * 3,
    n3 = parseFloat(grades[2]) * 4,
    n4 = parseFloat(grades[3]);

let media = (n1 + n2 + n3 + n4) / 10;
console.log(`Media: ${media.toFixed(1)}`);
if (media.toFixed(1) >= 7.0) console.log('Aluno aprovado.');
if (media.toFixed(1) < 5.0) console.log('Aluno reprovado.');
if (media.toFixed(1) < 7.0 && media.toFixed(1) >= 5.0) {
    console.log('Aluno em exame.');
    let exam = parseFloat(lines[1]);
    console.log(`Nota do exame: ${exam.toFixed(1)}`);
    media = (media + exam) / 2;
    if (media >= 5) console.log('Aluno aprovado.');
    console.log(`Media final: ${media.toFixed(1)}`);
}
