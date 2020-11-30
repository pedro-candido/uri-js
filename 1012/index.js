var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let areaValues = lines[0].split(' ');
let a = Number(areaValues[0]), b = Number(areaValues[1]), c = Number(areaValues[2]);

let triangle = (a * c) / 2;
let circle = 3.14159*(c ** 2);
let trapezio = (a+b)*c/2;
let square = b*b;
let rect = a*b;

console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rect.toFixed(3)}`);
