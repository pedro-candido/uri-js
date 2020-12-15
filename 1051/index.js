var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = Number(lines[0]);
let salaryTax;
let ir = [0.08, 0.18, 0.28];
if (salary < 2000.00) console.log('Isento')
else {
    if (salary <= 3000.00) {
        salaryTax = salary - 2000;
        console.log(`R$ ${(salaryTax * ir[0]).toFixed(2)}`)
    }
    else {
        if (salary <= 4500.00) {
            console.log(`R$ ${(((salary - 3000) * ir[1]) + 80).toFixed(2)}`)
        }
        else {
            console.log(`R$ ${(((salary - 4500) * ir[2]) + 350).toFixed(2)}`)
        }
    }
}