var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let initialDay = Number(lines[0].split(' ')[1])
let lastDay = Number(lines[2].split(' ')[1])

let firstSecond = Number(lines[1].split(':')[2])
let lastSecond = Number(lines[3].split(':')[2])

let firstMinute = Number(lines[1].split(':')[1])
let lastMinute = Number(lines[3].split(':')[1])

let firstHour = Number(lines[1].split(':')[0])
let lastHour = Number(lines[3].split(':')[0])

let daysRemaining, secondsRemaining, minutesRemaining, hoursRemaining;

let showResults = (secondsRemaining, minutesRemaining, hoursRemaining, daysRemaining) =>{
    console.log(`${daysRemaining} dia(s)`)
    console.log(`${hoursRemaining} hora(s)`)
    console.log(`${minutesRemaining} minuto(s)`)
    console.log(`${secondsRemaining} segundo(s)`)
}

let compareSeconds = (firstSecond, lastSecond, minutesRemaining, hoursRemaining, daysRemaining) =>{
    if(firstSecond === lastSecond) secondsRemaining = 0;
}

let compareMinutes = (firstMinute, lastMinute, hoursRemaining, daysRemaining) =>{
    if(firstMinute === lastMinute) minutesRemaining = 0;
    compareSeconds(firstSecond, lastSecond, minutesRemaining, hoursRemaining, daysRemaining)
}

let compareHours = (firstHour, lastHour, days) => {
    if (firstHour === lastHour) hoursRemaining = 0
    compareMinutes(firstMinute, lastMinute, hoursRemaining, days)
}

let compareDays = (initialDay, lastDay) => {
    if (initialDay === lastDay) daysRemaining = 0;
    else daysRemaining = lastDay - initialDay;
    compareHours(firstHour, lastHour, daysRemaining);
}

compareDays(initialDay, lastDay)

console.log(daysRemaining, hoursRemaining)