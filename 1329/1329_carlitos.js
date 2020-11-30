var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rodadas = [],
    mary = 0,
    john = 0,
    arr = [];

lines.filter((element) => {
    if (!element.includes(' ')) rodadas.push(element.trim());
    else arr.push(element.split(' '));
});

while (rodadas.length) {
    (mary = 0), (john = 0);
    if (Number(rodadas[0]) === 0) {
        return null;
    }

    for (let i = 0; i < Number(rodadas[0]); i++) {
        let caso = arr[0];

        if(Number(caso[i]) !== 1 && Number(caso[i]) !== 0) mary += 0;
        if(Number(caso[i]) === 1) john+=1;
        if(Number(caso[i]) === 0) mary+=1;
    }
    console.log(`Mary won ${mary} times and John won ${john} times`);

    rodadas.shift();
    arr.shift();
}
