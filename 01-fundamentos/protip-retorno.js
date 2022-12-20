// Body object 
const createPerson = (name, lastname) => ({ name, lastname })

const person = createPerson('loquita', 'Gómez'); 
console.log(person); //{ name: 'loquita', lastname: 'Gómez' }


//Print arguments - browser
function printArgs () {
    console.log(args);
}


// Print args
const printArgs2 = ( ...args)=>{
    console.log(args); //[ 10, 'hello', true ]
}
// ...printArgs2 = (edad ...args)
// ...log({edad, args})
// printArgs2(10, 'hello', true);{ edad: 10, args: [ 'hello', true ] }

// agg name to all attributes:
const printArgs3 = (age, ...args)=>{
    return args; 
}
// put name for each arg
const [married, murder, name, greetings ] = printArgs3(10, true, false, 'loquita', 'wenas')

//print array. Imprimir con pares de valores:
console.log({married, murder, name, greetings });

// Change name variable: 
const {lastname: nickname }= createPerson('loquita', 'Gómez'); 
console.log({nickname});


// DESTRUCTURACIÓN:

let personCreated = {
    name: 'loquita',
    age, 
    passions: [
        'paint',
        'travel',
        'eat popetas',
        'eat in general',
        'stay with cat children' 
    ],
}

const printPerson = ({name, age = 19, passions}) => {
    console.log({name, age, passions});
}
printPerson(personCreated); 
