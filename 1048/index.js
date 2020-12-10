var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let reajustes = [1.15, 1.12, 1.1, 1.07, 1.04];
let reajustesPerc = [15, 12, 10, 7, 4];
let oldSalary = Number(lines[0]);
let newSalary = 0.0;
let perc;

if (oldSalary <= 400.0)
    (newSalary = oldSalary * reajustes[0]), (perc = reajustesPerc[0]);
else if (oldSalary <= 800.0)
    (newSalary = oldSalary * reajustes[1]), (perc = reajustesPerc[1]);
else if (oldSalary <= 1200.0)
    (newSalary = oldSalary * reajustes[2]), (perc = reajustesPerc[2]);
else if (oldSalary <= 2000.0)
    (newSalary = oldSalary * reajustes[3]), (perc = reajustesPerc[3]);
else (newSalary = oldSalary * reajustes[4]), (perc = reajustesPerc[4]);

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${(newSalary - oldSalary).toFixed(2)}`);
console.log(`Em percentual: ${perc} %`);
