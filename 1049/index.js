var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let a = lines[0].trim(),
    b = lines[1].trim(),
    c = lines[2].trim();

let obj = [
    {
        vertebrado: [
            {
                ave: [
                    {
                        carnivoro: 'aguia',
                        onivoro: 'pomba',
                    },
                ],
                mamifero: [
                    {
                        onivoro: 'homem',
                        herbivoro: 'vaca',
                    },
                ],
            },
        ],
        invertebrado: [
            {
                inseto: [
                    {
                        hematofago: 'pulga',
                        herbivoro: 'lagarta',
                    },
                ],
                anelideo: [
                    {
                        hematofago: 'sanguessuga',
                        onivoro: 'minhoca',
                    },
                ],
            },
        ],
    },
];

obj.map((item) => {
    item[a].map((item) => {
        item[b].map((item) => {
            console.log(item[c]);
        });
    });
});
