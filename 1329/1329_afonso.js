var input = require("fs").readFileSync("dev/stdin", "utf-8");
var values = input.split("\n");
 
var rounds = values[0].split(" ");
var score = values[1].split(" ");
 
let maryCount = 0;
let johnCount = 0;
 
for (let i = 0; i < score.length; i++) {
    if (score[i] === "0") {
        maryCount++;
    } else {
        johnCount++;
    }
}
 
console.log(`Mary won ${maryCount} times and John won ${johnCount} times`);