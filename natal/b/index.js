var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let elfos = [
    { name: "bonecos", hours: 8 },
    { name: "arquitetos", hours: 4 },
    { name: "musicos", hours: 6 },
    { name: "desenhistas", hours: 12 },
]

let bonecos = 0, hoursBonecos = 0, arquitetos = 0, hoursArquitetos = 0, musicos = 0, hoursMusicos = 0, desenhistas = 0, hoursDesenhistas = 0; 

lines.shift()

let work = (line) => {
    if(line === undefined) return null;
    let elfName = line.split(' ')[0];
    let elfJob = line.split(' ')[1];
    let elfHours = Number(line.split(' ')[2]);
    lines.shift()
    if(elfJob === elfos[0].name) bonecos += 1, hoursBonecos += elfHours;
    if(elfJob === elfos[1].name) arquitetos += 1, hoursArquitetos += elfHours;
    if(elfJob === elfos[2].name) musicos += 1, hoursMusicos += elfHours;
    if(elfJob === elfos[3].name) desenhistas += 1, hoursDesenhistas += elfHours;

    work(lines[0])
}
work(lines[0])

let numberBonecos = Math.trunc(hoursBonecos / elfos[0].hours); 
let numberArquitetos = Math.trunc(hoursArquitetos / elfos[1].hours); 
let numberMusicos = Math.trunc(hoursMusicos / elfos[2].hours); 
let numberDesenhistas = Math.trunc(hoursDesenhistas / elfos[3].hours); 


console.log(`${numberBonecos + numberArquitetos + numberDesenhistas + numberMusicos}`)