// Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos.

// const sum = (num1,num2) => num1 + num2;
// console.log(sum(1,2));

// Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.

// const isPar = (num) => (num % 2 == 0) ? true : false
// console.log(isPar(3));

// Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.

// const isDivisible = (num,deno) => ( num%deno == 0) ? true : false;
// console.log(isDivisible(40,3));

// Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.

// const nTimesRepeat = (letter, times) => letter.repeat(times);
// console.log(nTimesRepeat("x",3));
// const calculateMCD = (num1, num2) => {
//     let i = (num1 > num2) ? num1 : num2;
//     while( i >= 0) {
//         if (num1%i == 0 && num2%i == 0) {
//             return i;
//         } else if (i == 0) {
//             return 1;
//         } else {
//             i--
//         }
//     }
// }

// console.log(calculateMCD(27,9));

// Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1

// function factorial(number) {
//     let word = '', i = number, factorial = 0;
//     while (i > 0) {
//         factorial += i
//         word += i + '*'
//         i--
//     }
//     word = word.substring(0, word.length - 1); //Desde donde hasta donde vamos a cortar
//     word += ' = ' + factorial;
//     console.log(word);
// }

// factorial(3);

// Escribir una función que reciba un número como argumento y lo devuelva invertido, o sea, escrito del revés. Usar esta función para determinar si un número es capicúa (palíndromo);

// const isPalindromoFunction = (word) => {

//     let newWord = word.split("").reverse().join(""); //Separo cada letra en "" y convierto en un array. Reverso. Unir letras por "".
//     return (newWord === word ) ? true : false;
// }

// console.log(isPalindromoFunction('anilina'));

// Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 100 euros.

// const taxCalculate = (number, tax) =>  number + (number * tax) / 100;
// console.log(taxCalculate(100,20));

// En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula.

// const writeNotes = (note) => {
//   switch (note) {
//     case 10:
//         console.log('matrícula');
//       break;
//     case 9:
//         console.log('sobresaliente');
//       break;
//     case 7:
//     case 8:
//         console.log('Notable');
//     break;

//     case 6:
//         console.log('Bien');
//       break;
//     case 5:
//         console.log('Aprobado');
//       break;
//     default:
//         console.log('suspenso');
//       break;
//   }
// };

// writeNotes(7)

// Escibe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....

// const century = (year) =>{
//     const century = parseInt((year/100)) + 1; 
//     console.log(century);
// }

// century(1910); 