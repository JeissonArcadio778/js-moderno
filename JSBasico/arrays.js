//Arrays: listas con datos


var frutas = ["Murrapo", "Shoshana", "Fresa"];
//random, devuelve un numero flotante
//floor, lo convierte en entero sin importar decimales. 
var ranFruit = frutas[Math.floor(Math.random()*frutas.length)]; 
console.log(ranFruit); 

let thing = Math.random()*frutas.length; 
console.log(thing); 
typeof(thing); 


//split. Basicamente convierte un string en un array de acuerdo a la regla que se ponga
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

const threeChars = str.split(' '); 
console.log(threeChars[1]); 

// 'fruits' array created using String.prototype.split(). LEER
const fruits = 'Apple, Banana'.split(', ');
console.log(fruits.length);
// 2