var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let order = lines[0].split(' ');
let food = [
    { code: 1, price: 4.0 },
    { code: 2, price: 4.5 },
    { code: 3, price: 5.0 },
    { code: 4, price: 2.0 },
    { code: 5, price: 1.5 },
];

let code = parseInt(order[0]);
let quantity = parseInt(order[1]);
let total = 0;

food.map((item) => {
    if (code === item.code) total = item.price * quantity;
});

console.log(`Total: R$ ${total.toFixed(2)}`);
