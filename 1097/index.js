let i = 1;
let j = 7;
let aux;

for(i; i !== 11; i += 2){
    aux = j - 3;
    for(j; j !== aux; j--){
        console.log(`I=${i} J=${j}`);
    }
    j += 5;
}