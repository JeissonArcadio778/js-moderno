// En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6

// let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'Saraturday' ];

// function chooseDay(day) {
//     console.log(weekDays[day])
// }
// chooseDay(1);

// Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para traduicr los valores true y false. Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.

// let arr = [true, false], number = 4;
// let index = (0 <= number && number <= 9) ? 0 : 1;
// console.log(arr[index]);

// Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.

// const sumList = (arr = []) => {
//   // let sum = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //     sum += arr[i];
//   // }
//   // return sum;

//   //Two option:

//   let sum = 0;
//   for (let value of arr) {
//     sum += value;
//   }
//   return sum;

// };

// let res = sumList([1, 2, 3]);
// console.log(res);

// Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

// Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.

// No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).

// let size;
// do {
//     size = parseInt(prompt('Give the size of the Arr'));
// } while (isNaN(size)); //False to continue

// let num;
// let i;
// let arr = []
// while (size > i) {
//     num = parseInt(prompt());
//     arr.push()
// }

let size;

do {
  size = parseInt(prompt("Give the size of the Arr"));
} while (isNaN(size)); //False to continue

let num;
let i;

let arr = [];
for (i = 0; i < size; i++) {
  num = parseInt(prompt("Give the numbers"));
  if (num == 0 || isNaN(num) != false) {
    console.log('Exit');
    break;
  }
  arr[i] = num;

  //Contar pares e impares

  for (let i = 0; i < arry.length; i++) {    
  }



}
console.log({ arr });
