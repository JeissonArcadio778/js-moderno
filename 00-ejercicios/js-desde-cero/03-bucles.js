//CICLO FOR

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

