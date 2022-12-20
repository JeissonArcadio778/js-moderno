// When is Opening!
const day = 0;
const realTime = 10; 

let timeOpening; 
let message; 

// dia === 0 || dia === 6? 
timeOpening = ([0,6].includes(day)) ? 9 : 11;
console.log(timeOpening);
// realTime <= timeOpening
message = ( realTime >= timeOpening) ? 'Is Opening' : 'Is not Opening'; 

console.log({day, message});

// ProTIP:

const friend = true; 

const friendArr = [
    'Julio', 
    'Maria',
    'Pulga',
    'Sara',
    friend ? 'Valen': 'Jesú',
    // Funcion Anónima autoinvocada
    (() => 'Edinson')()
    // I can invoke a function
]

console.log(friendArr);


const note = 80; 

const grade = note >= 95 ? 'A+':
              note >= 90 ? 'A' :
              note >= 85 ? 'B+':
              note >= 80 ? 'B' :
              note >= 75 ? 'C+':
              note >= 70 ? 'C' : 'F'; 

console.log({note, grade});