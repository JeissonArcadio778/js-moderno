// let price = 100;
// let iva = 19;
// let totalPrice = price + (price*(19/100));
// console.log(`The total price: ${totalPrice}`);

// calculate perimetry and area

// const calculus = (side)=>{
//     console.log(`Area is: ${side*side}
//     Perimetry is: ${4*side}`);
// }

// calculus(40);

// Say Hi
// const sayHi = (name)=>{
//     console.log(`Hello ${name}`);
// }
// sayHi('Alex')

// Calculate Media
// const mediaCal = (num0, num1, num2)=>{
//     let media = (num0 + num1 + num2)/3;
//     console.log(`Media is: ${media}`);
// }
// mediaCal(2,3,4);

// Unidades y decenas // Units and tens
let num = 45; 
let unidades, decenas;
unidades = num % 10;
decenas = parseInt(num / 10);
console.log(decenas + " decenas y ");
console.log(unidades + " unidades");

// Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

let diners, potatoes, onions, eggs; 

diners = 10
potatoes = diners * 200; //gr
potatoes = potatoes / 1000; //kg
eggs = potatoes * 5; //uns
onions = potatoes * 300//gr;
console.log(`
    For ${diners} we will need: 
    ${potatoes} Kg of potatoes
    ${eggs} eggs
    ${onions} gr of onions
`);

//Teiens que escribir un prograa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la sgudna y la segunda el valor de la primera.

let varOne = 10; 
let varTwo = 30;
let varAux;

varAux = varTwo;
varTwo = varOne
varOne = varAux
console.log({varOne, varTwo});

//No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.

let number = 5; 

if( number % 2 == 0 ){
    console.log(true);
}else{
    console.log(false);
}
