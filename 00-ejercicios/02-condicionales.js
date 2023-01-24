//Conditional exercises:

//Se trata de escribir un script que diga si un número es par o es impar.
// let num = 17
// if(num%2 == 0){
//     console.log('Par');
// } else{
//     console.log('Impar');
// }

// Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo
// let num = 0

// if (num>=0) {
//     console.log('Positive');
// }else{
//     console.log('Negative');
// }

//En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error

// let num1 = 4,
//     num2 = 0

// if (num1/num2 == 0) {
//     console.log('Error');
// } else {
//     console.log(num1/num2);
// }

//Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...

// let letter = 'a'

// let array = ['A', 'B', 'C', 'D']

// if (array[0] = letter.toUpperCas()) {
//     console.log('Acertó!');
// } else {
//     console.log('No acertó');
// }

// let letter = 'a'

// if (letter === 'a' || letter === 'A') {
//     console.log('Good!');
// } else {
//     console.log('Bad');
// }

// let array = ['A', 'B', 'C', 'D'];
// let letter = 'z';

// if (array.includes(letter.toUpperCase())) {
//     console.log('Good!');
// } else {
//     console.log('Bad!');
// }

//En este ejemplo el usuario entrará dos números. Debe devvolver la diferencia entre el mayor y el menor

// let num1 = 8, 
//     num2 = 5

// if (num1 > num2) {
//     console.log(num1 - num2);
// }else{
//     console.log(num2 - num1);
// }

// Buenas noches a todos. Soy estudiante de Ingeniería, pero por siempre seré un campesino más. Quisira comenzar a vender mis productos/pescados. Tengo *cachama, tilapia y bocachico*. Vivo en medellín por estudios, pero la finca con los pescados está en la vereda Campo 23. (Cerca a 30 minutos de Barrancabermeja). ¿Tienen algunas recomendaciones, consejos, experiencias que me quisieran aportar? Les estaría infinitamente agradecido. Dios los bendiga. 


//Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.

// let array = ['cerveza', 'vino', 'refresco', 'agua']; 

// if (array.includes('perro')) {
//     console.log('Barra');
// } else {
//     console.log('tienda');
// }

//En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.


// let length = 100, time = 2 
// let speed = length/time   

// if (speed>= 40 && speed <= 60) {
//     console.log('good!');
// } else {
//     console.log('Bad!');
// }

// El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo

// let num1 = 30, num2 = 9
// num1 > num2 ? console.log({num1}) : console.log({num2}); 

// El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensja ede acierto en caso contrario dirá que se produjo un error

// let num1 = 21, 
//     num2 = 4; 

// // let result = 
// if ((num1*num1) === num2) {
//     console.log('Good!');
// } else {
//     console.log('Bad!');
// }

//En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

// let credito = 3; 
// let acceso = 'Salas: '; 
// switch (credito) {
//     case 4:
//         acceso += 'Consolas, '
//     case 3:
//         acceso += 'Juegos 3D, '
//     case 2:
//         acceso += 'Juegos 2D, '
//     case 1:
//         acceso +='Realidad Virtual.'
//         break; 
//     default:
//         console.log('No tienes dinero');
//         acceso += 'Ninguno' 
//         break;
// }

// console.log({acceso});

// Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.
// Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,100,11 otoño

// let winter = [12, 1, 2], 
//     spring = [3, 4, 5], 
//     summer = [6, 7, 8], 
//     autumn = [9, 10, 11], 
//     select = 6

// let stations = [[12, 1, 2],[3, 4, 5],[6, 7, 8],[9, 10, 11]], select = 6


// if (stations[0].includes(select)) {
//     console.log('Winter');
// } else if (stations[1].includes(select)){
//     console.log('summer');
// } else if (stations[2].includes(select)) {
//     console.log('spring');
// } else if (stations[3].includes(select)) {
//     console.log('autumn');
// } else {
//     console.log('Select a correct choose!');
// }


// let lado = 1
// let lado2 = 2
// let solution = (lado === lado2) ? 'Square' : 'Rectangle';
// console.log(solution);

// let discount = 0
// let buys = 150
// let total = 0

// if (buys > 100 && buys<300)  {
//     // Discount of 5%
//     discount = buys*(0.05)
//     console.log(discount);
//     total = buys - discount
//     console.log(total);
// }else if (buys> 300 && buys< 500) {
//     // Discount of 10%
//     discount = buys*(0.05)
//     console.log(discount);
//     total = buys - discount
//     console.log(total);

// }else if (buys>500) {
//     //Discount of 15%
//     discount = buys*(0.05)
//     console.log(discount);
//     total = buys - discount
//     console.log(total);
// }else{
//     //Not discount
//     total = buys - discount
//     console.log(total); 
// }



// let factura, total;
// factura = parseInt(prompt('¿Cuánto ha comprado?') );
// switch (true){
//     case (factura >=100 && factura <= 300):
//         descuento = 5;
//         break
//     case (factura >300 && factura <=400):
//         descuento = 10;
//         break
//     case (factura >400):
//         descuento = 15;
//         break
//     default:
//         descuento = 0;
//    }
// total = factura*(1 - descuento/100);
// alert("Debe pagar: " + total + "€");



















