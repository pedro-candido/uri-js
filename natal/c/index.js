var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let numberOfTeams = Number(lines[0]) / 3;
lines.shift()

let elfs = [];
let teams = new Array(numberOfTeams);
let lider = [], entregador = [], pilotos = [];

let work = (line) => {
    if (line === undefined) return null;

    elfs.push({ name: line.split(' ')[0], age: line.split(' ')[1] })
    lines.shift()
    work(lines[0])
}

let compare = (a, b) => {
    if (a.age > b.age) return -1
    if (a.age < b.age) return 1
    return 0
}

work(lines[0])
elfs.sort(compare)

for (let i = numberOfTeams - 1; i >= 0; i--) {
    pilotos.push(elfs[elfs.length - 1 - i])
}
elfs.splice(elfs.length-3, 3)

for(let i = numberOfTeams-1; i >= 0; i--){
    entregador.push(elfs[elfs.length-1-i])
}
elfs.splice(elfs.length-3, 3)

for(let i = numberOfTeams-1; i >= 0; i--){
    lider.push(elfs[elfs.length-1-i])
}
elfs.splice(elfs.length-3, 3)

for(let i = 0; i<numberOfTeams; i++){
    console.log(teams)
    teams[i] = (lider[i], entregador[i], pilotos[i])
}

