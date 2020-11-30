var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n')
var [deckSize, tableCard, limit] = (lines.shift().split(' ').map((item) => parseInt(item)));

var index = 0, points = {​​​​​​​ "ana" : 0, 'bob': 0 };​​​​​​​
var board = {​​​​​​​
    deck: deckSize,
    table: tableCard,
    limit: limit,
}​​​​​​​


function play(tc, c, l, i) {​​​​​​​
    const abs = Math.abs(c - tc)
    if (abs <= l) {​​​​​​​
        points[i % 2] += abs
        board.table = c
    }
}​​​​​​​


for (var l of lines) {​​​​​​​
    play(board.table, parseInt(l), board.limit, index++)
}​​​​​​​

console.log(points[0] + ' ' + points[1])