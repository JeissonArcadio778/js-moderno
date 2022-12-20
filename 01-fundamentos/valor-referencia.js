// This values are 'for value' because are primitives
let a = 10; 
let b = a; 
a = 30; 
console.log({a, b}); //{ a: 30, b: 10 }

// Literal Objects or Objects are 'For reference' 

// let loquito = {name: 'Jeisson'}; 
// let loquita = loquito; 
// loquita.name = 'Sara'; 
// console.log({loquita, loquito}); //{ loquita: { name: 'Sara' }, loquito: { name: 'Sara' } }

// How fix it?
let loquito = {name: 'Jeisson'}; 
// I need to pu this operator {...(xxx)} because it create a new object and this apunta to a new memory space
let loquita = {...loquito}; 
loquita.name = 'Sara';
console.log({loquita, loquito});


// Agg fruits
const fruits = ['Apple', 'Pear', 'pineapple']; 
const otherFruits = [...fruits]; 
otherFruits.push('Mango0')
console.log({otherFruits, fruits});

// Terminar de ver clase!