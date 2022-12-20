// Objetos que tiene pares de valores

let person = {
    name: 'loquita',
    age: 20, 
    passions: [
        'paint',
        'travel',
        'eat popetas',
        'eat in general',
        'stay with cat children' 
    ],
}

console.log('Person name: '+ person['name']);
console.log(`Person name: ${person.name}`);
console.log(`Favorite Passions: ${person.passions[0]}`);
console.log(`Favorite Passions: ${person.passions.length}`);

// Delete property of object
delete person.age; 
console.log(person);

// Agg property after: 
person.love = 'yeloquito'; 

// convertir a Array cada propiedad con su definición. 
const entriesPares = Object.entries( person );
console.log(entriesPares);
// {
//     name: 'loquita',
//     passions: [
//       'paint',
//       'travel',
//       'eat popetas',
//       'eat in general',
//       'stay with cat children'
//     ]
//   }
//   [
//     [ 'name', 'loquita' ],
//     [
//       'passions',
//       [
//         'paint',
//         'travel',
//         'eat popetas',
//         'eat in general',
//         'stay with cat children'
//       ]
//     ]
//   ]

// Protect my object: blocking and keep his propeties. Pero cambia lo que esté dentro de las propiedades.  
Object.freeze(person); 
person.money = 122121212; 
console.log(person);

// Print days of the week!
let daysArr = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'SaraTurday', 'Sunday']; 

const printDayArr = (numDay) => {
    return daysArr[Number(numDay)]; 
}
console.log(printDayArr(0));

let dayObj = {
    
    0 : 'Monday', 
    1 : 'Tuesday', 
    2 : 'Wednesday', 
    3 : 'Thursday', 
    4 : 'Friday', 
    5 : 'SaraTurday', 
    6 : 'Sunday', 
}

const printDayObj = (numDay) => {return dayObj[numDay]}; 

console.log(printDayObj(Number(0)));