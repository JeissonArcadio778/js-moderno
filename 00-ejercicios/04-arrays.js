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

// let size, num,par = 0, impar = 0, arr = []

// do {
//   size = parseInt(prompt("Give the size of the Arr"));
// } while (isNaN(size)); //False to continue


// for (let i = 0; i < size; i++) {
//   num = parseInt(prompt("Give the numbers"));
//   if (num == 0 || isNaN(num) != false) {
//     console.log('Exit');
//     break;
//   }
//   arr[i] = num;
// }

// //se deben contar los pares/impares
// for (let i = 0; i < arr.length; i++) {   

//   if (arr[i]%2 == 0) {
//     console.log('par');
//     par++
//   }else {
//     console.log('impar');
//     impar++
//   }
// }

// console.log({par, impar});
// console.log({ arr });

//SOLUCIÓN DINáMica

// var lista=[], ind=0, pares=0, impares=0, numero;
// do{
//     numero= parseInt(prompt("Número "));
//    if(numero !=0 && !isNaN(numero)){
//         lista[ind] = numero
//         ind++;
//    }
// }while (numero !=0 && !isNaN(numero));
// alert("Lista de números "+lista);
// for(ind=0; ind < lista.length; ind++){
//     if (lista[ind]%2==0) 
//         pares++
//     else 
//         impares++
// }
// console.log("pares " + pares);
// console.log("Impares " + impares);


// Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). No uses métodos del objeto array.

// Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.

// // Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'


// const minArr = (arr = [], n) => {
    
//     //Encontrar el valor más pequeño: sort
//     arr.sort(); 
    
//     //Dar indice o valor
//     if (n == 'v') {
//        console.log(arr[0]); 
//     } else {
//       console.log(0);
//     }

// }

// let res = minArr([2,3,1], 'i'); 

//Buscar si la letra está incluida en el string/array 

// const searchLetter = (word, letter) => {

//     let arrWord = word.split(""); //Separar por ""

//     if (arrWord.includes(letter)) {
//         console.log('Yes, '+ letter +' is in the word');
//     } else {
//       console.log('No, '+ letter +' is not in the word');
//     }

//   }

// searchLetter('Venezuela', 'i'); 


// Escribe una función qeu reciba como argumento un array y que devuelva una cadena de caracteres formada por los elementos del array separados por un guión

// const listFor = (arr = []) => {
    
//     let wordFor = '', element = ''; 

//     for (let i = 0; i < arr.length - 1; i++) {
//         element = arr[i];
//         console.log({element});
//         wordFor += element + '-'; 
//         console.log({wordFor});
//     }

//     wordFor += arr[arr.length - 1]; 
    
//     return wordFor; 
// }   

// const res = listFor(['Red', 'Green', 'Blue']); 

// console.log(res);

// function listar(lista){
//     let cadena='';
//     cadena=lista[0];
//     for(let ind = 1; ind < lista.length; ind++){
//       {cadena += "-" + lista[ind];
//      }
//      return cadena
// }


// Un servicio de atención al ciente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio  una persona: lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

// Usa un array para almacenar los datos del servicio. En este array cada elemento será un para día - nombre.

// Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si el día no existe deberá decir que no hay servicio. Los nombres de los días deben ir en minúsculas.


// function servicio(dia){
//     var servicios = [ 
//     ['lunes', 'Maria'],
//     ['martes', 'Luis'],
//     ['miércoles', 'Antonia'],
//     ['jueves', 'Pedro'],
//     ['viernes', 'Marisa']
//     ]
//     var ind, persona = "No hay servcicio";
//     for(ind = 0; ind  < servicios.length; ind++) {
//          if (servicios[ind][0]) == dia){
//               persona = servicios[ind][1];
//               break;
//               }
//         }
//     return persona;
//     }
     
//     diaSemana = prompt("Teclear dia de semana ");
//     alert("Este día se encarga "+ servico(diaSemana));


// Un tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array conde cada elemento es un par producto - precio.

// Diseña una función que reciba como argumento el nombre de un producto (minúscula) y devuelva su precio.

// let products = [ 
//     ['pcGamer', 5000],
//     ['mouseGamer', 60],
//     ['keyBoard', 120]
// ]; 

// const priceGamer = (object = 0) => {
    
//     let res = 'The product not exists.';
//     for (let i = 0; i < products.length; i++) {
//         console.log(products[i][0] );
//         if (products[i][0] == object) {
//             res = products[i][1]; 
//             break; 
//         }; 
//     }; 

//     if (isNaN(res)) {
//         console.log(true);
//         return res; 
//     }

//     return res; 

// }

// console.log(priceGamer('pcGamer'));


