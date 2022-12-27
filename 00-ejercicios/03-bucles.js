//TODO:CICLO FOR

// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.

// let value = 5;
// let numbers = '';
// let i;
// for (i = 0; i < value; i++) {
//     numbers += i + ', '
// }
// numbers += value; // Al final se pone el primer numero y ya
// console.log(numbers);

//De para atrás:

// let value = 5;
// let numbers = '';
// let i;
// while ( value >= 1 ) {
//     numbers += value + ', '
//     value--
// }
// numbers += value //TRUCAZO
// console.log(numbers);
// console.log('Hello World');

// Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').
// let numbers = []
// for (let index = 0; index < 9; index++) {
//     if( index%2 === 0) {
//         numbers.push(index);
//     }
// }

// console.log({numbers});

// Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
// Recuerda que el salto de linea es el carácter "\n"

// let value = 10;
// for (let i = 0; i < value; i++) {
//     console.log(`${value} x ${i} = ${value*i}`);
// }

// En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
// Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.

// //recorro todos los numeros
// let num = 14
// let array = []
// for (let i = 0; i < num; i++) {

//     if (i%3 == 2) {
//         array.push(i)
//     }

// }

// console.log({array});

// Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4

//hasta 4
//incrementar segundo

//pregunto si es 4. Incremento a 1
// let num = 0;
// for (let i = 0; i <= 4; i++) {
//     console.log(`${num}:${i}`);
//     if (i===4) {
//         console.log(`${num+1}:${i}`);
//     }
// }

// Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.
// let num = 5
// let word = '*'
// for (let i = 0; i < num; i++) {
//     word +=word
//     console.log(word);
// }

// Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la fomra "Los números enteros de 0 a n  suman suma"

//10 = 1
// let num = 5
// let r = 0
// for (i = 0; i <= num; i++) {
//     r +=i
//     console.log(r);
// }

// console.log('La suma desde 0 hasta ' + num + ' es: ' + r);

//TODO:WHILE LOOP:

// Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.

// //numero
// let num = 5;
// let i = 0;
// let arr = []
// let fhrase = '';
// //ciclo
// while (i<=num) {
//     //agrego a la lista
//     arr.push(i)
//     //push phrase:
//     fhrase += i + ','
//     i++
// }
// //la imprimo
// console.log(arr);

// //Fix the last one number
// fhrase += i
// console.log(fhrase);

// Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número

// let condition = false;

// while (!condition) {
//     num = prompt()
//     console.log(num);
//     if (0 <= num && num <= 5) {
//         condition = true
//         console.log(true);
//     }

// }

// alert('Eso es!');

// Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta
// let condition = false;

// while (!condition) {
//     console.log('¿Do you want finish the program?');
//     let res = prompt();
//     if (res.toUpperCase() == 'N') {
//         console.log('Finish the program');
//         condition = true
//         break; //Parar el programa
//     }
//     console.log('Continue...');
// }

// Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.
//La el residuo debe ser 0
// let num = prompt(), divisor = 2, isPrimo = 'is primo';

// //The numebers: one, two, never gets into in the while
// while (divisor < num) {
//     if (num%divisor == 0) {
//         isPrimo = 'is not primo'
//     }
//     divisor++;
// }

// console.log(isPrimo);

// Escribir un script que pida al usuario una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso"

// let password = 'Eulaloquita778'
// let count = 0;
// while ( count < 3 ) {
//     let userPass = prompt('Password: ');

//     if (userPass == password) {
//         console.log('Continue...');
//         break;
//     }
//     count++
// }

// console.log('Acceso Denegado');

// En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.
// let num, userNums = 0;
// while (num != 0) {
//     num = parseInt(prompt());
//     userNums += num
//     console.log(userNums);
// }

// console.log({userNums});

// Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.

//Los meto a un array. Uso metodo. Saco el primero y el último.

// let numbers = [], lastNum, firstNum, num;

// while ( num !=0 ) {
//     num = parseInt(prompt('Enter Number: '));
//     numbers.push(num);
//     numbers.sort();
// }

// console.log({numbers});
// lastNum = numbers.pop();
// firstNum = numbers.shift();
// console.log({lastNum, firstNum});

//OR

// let max=0, min=0, numero;
// numero = parseInt(prompt("Teclee un número"));
// min = numero;
// while (numero !=0){
//     max = (numero > max)?numero:max;
//     min = (numero < min)?numero:min;
//     numero = parseInt(prompt("Teclee un número"));
// }
// if ( max== 0){
//     alert("No ha tecleado ningún número ")
// }
// else{
//     alert("El máximo es "+ max + "\nEl mínimo es "+min);
// }

// Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).

// let numbers = [], num = 2;
// while ( num%2 == 0 ) {
//     num = parseInt(prompt());
//     numbers.push(num);
// }

// numbers.push(num);
// console.log({numbers});
// console.log('Count: ' + numbers.length);

// // or

// let numero=0, total=0;
// while(numero % 2 ==0){
//     numero = parseInt(prompt("Teclee un numero"));
//    total ++;
// }
// total--;
// alert("Ha ingresado en total "+ total+" numeros pares");

// Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera del menus se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.
// let option;
// while (option != 3) {
//   option = parseInt(
//     prompt(`
//     1- Leer datos.
//     2- Mostrar datos.
//     3- Fin
//     `)
//   );

//   switch (option) {
//     case 1:
//         console.log('Option One');
//       break;
//     case 2:
//         console.log('Option Two');
//       break;
//     default:
//         console.log('Select a correct Answer');
//       break;
//   }
// }


// Un script pedirá al usuario que vaya tecleando números hasta llegar al 0, entocnes el programa muestra "La suma es " seguido de la suma de los números. Si esta suma es par el programa se repite y si es impar el programa acaba.

// let condition = false, sumNum = 0, num; 

//   while (!condition) {

//       num = parseInt(prompt()); 
//       sumNum += num

//       if (num == 0) {
//         console.log('The sum is: ' + sumNum);
//         if (sumNum%2 != 0) {
//             console.log('Program Over');
//             condition = true; 
//             break; 
//         }
//       }    
//   }

//   console.log({num, sumNum});


//TODO: Do while loop:
// Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes
// do {
//     let letter = prompt(); 
//     if (letter === 'A') {
//         alert('Good!'); 
//         break; 
//     }
// } while (true);


// //Or
// let letter; 
// do {
//     letter = prompt(); 
// } while (letter != 'A');

// let count = 2, num = parseInt(prompt()), isPrimo = 'yes primo'
// do {
//     if (num%count == 0) {
//         isPrimo = 'No primo'
//         break; 
//     }
//     console.log(count);
//     count++
// } while (count <= num );

// alert(isPrimo); 

// En este script vas a crear un menu con tres opciones: escribir, leer, ssalir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.

// let option; 
// do {
//    option = parseInt(prompt(`
//         1. Comprar una SIM
//         2. Pasarte a Virgin 
//         3. salir
//     `)); 

//     switch (option) {
//         case 1:
//             console.log('Comprar SIM');
//             break;
//         case 2:
//             console.log('Pasarte a Virgin');
//             break;
//         case 3:
//             console.log('Vuelve pronto');
//             break;
    
//         default:
//             alert('Choose a correct answer')
//             break;
//     }
    
// } while (option != 3);

// En este script se le pide al usuario que teclee dos números, el script mostrará la suma y pedirá al usuario si queire repetir. Si teclea S repite y si teclea N el programa sale. No acepta otras teclas
// let  i, number, sum, times; 
// do {
//     number = 0, sum = 0, times = 0, i = 0; 
//     console.log({number,sum, times, i});
//     //cuantas números quiere sumar 
//     times =  parseInt(prompt('how much numbers do u want to sum?'));
//     //sumo 

//     while (i < times) {
//         number = parseInt(prompt('Give me the numbers, please'));
//         sum += number
//         i++
//     }
//     //muestro
//     console.log({sum});

//     //desea continuar?
//     option = prompt('Do u want to try again? Yes/Y - No/N');

// } while (option != 'N');

// Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.
// let letter, times = 1000, res;

// do {
//     do {
//         letter = prompt('Get a Letter: ');
//         console.log({letter});
//     } while (letter != 'X' && letter != 'Z');
    
//     console.log({letter});

//     do {
//         times = parseInt(prompt('Get times: '));
//         console.log({times}); 
//     } while (1 > times || times > 15);  

//     res = letter.repeat(times); 
//     console.log(res); 

// } while (!res);

// En este sript se trata de calcular el máximo común divisor de dos números. El algorimto es simple: dividimos el primoer por el segundo. si el resto es cero este segundo es el mcm. Si no se desecha el primero y se repite el proceso con el segundo y el resto. Así mientras el resto no sea 0


// ENtra un número, lo analiza y muestra, sino, sigue con el otro
// let num, deno, res; 
// num = parseInt(prompt()); 
// deno = parseInt(prompt());
// do {
//     if (num%deno == 0) {
//         console.log(`El mcd de ${num} es ${deno}`);
//         break; 
//     }
//     deno--
// } while (deno != 0);


// Este ejemplo debe pedir al usuario un  número entero y, mediante sucesivas divisiones por 10 debe escribir los digitos que lo forman de menor a mayor orden (de unidades hacia arriba) en una cadena separados por un espacio

// let num, dig, arr = [];
// num = parseInt(prompt()); 
// do {
//     console.log({num});
//     dig = num%10; 
//     console.log({dig});
//     num = parseInt(num/10);
//     console.log(num);
//     arr.push(dig);
// } while (num > 0 );

// console.log(`Las unidades: ${arr[0]}, decenas: ${arr[1]}, centenas ${arr[2]}`);

// Diseñar un script que pida un número mayor que cero y devuelva la suma de todos los números pares desde cero al número introducido. Mostrará la suma y volverá a pedir otro núero hasta que el usuario teclee un 0.

// let num, sum, letter; 
// do {
//     sum = 0, letter = ''; 
//     num = parseInt(prompt('get a number. 0 for exit')); 
//     for (let i = 2; i < num; i +=2) {
//         letter += i + ' '; 
//         sum += i; 
//     }
//     if (sum === 0) {
//         break; 
//     }
//     console.log({sum});
//     console.log(letter+=num);

// } while (num != 0);

// Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. Si el primero es menor o igual que el segundo el programa acaba y dice "Numeros en orden creciente"

// let numOne, numTwo;
// do {
//     numOne = parseInt(prompt())
//     numTwo = parseInt(prompt())

//     if (numOne <= numTwo) {
//         console.log("Numeros en orden creciente");
//         break;
//     }
    
// } while (true);

// Escribir un script para determinar si el numero introducido por el usuario es un palíndromo, es decir, un número que se lee igual del derecho que del revés.

// Para invertir el número podéis hacer sucesivas divisiones entre 10: el resto lo añadis al inveso multiplicado por 10. Y repetis con el valor entero del numero dividido por 10.

// let isPalindromo = false;

// do {
//     let word = prompt('Give a word: '); 
//     let arrLetters = word.split(""); //Separo cada letra en "" y convierto en un array
//     arrLetters.reverse();  
//     newWord = arrLetters.join(""); //Unir letras por ""

//     if (newWord === word) {
//         isPalindromo = true
//         console.log({isPalindromo});
//         break; 
//     }
//     console.log({isPalindromo});

// } while (!isPalindromo);
