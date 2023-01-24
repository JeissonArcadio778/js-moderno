// // const init = { input: process.stdin, output: process.stdout }
// // const readline = require("readline").createInterface(init)[Symbol.asyncIterator]();

// // (async () => {
    
// //     let numberSheeps = (await readline.next()).value

// //     let count = 0, arrSheeps = []; 

// //     while(numberSheeps > count) {
// //         sheep = (await readline.next()).value
// //         arrSheeps.push(sheep)
// //         count++
// //     }

// //     // console.log(arrSheeps); [ 'Noa,blue', 'Euge,red', 'Ki Na Ma,red' ]

// //     for (let i = 0; i < arrSheeps.length; i++) {
    
// //     let sheepValue = arrSheeps[i].split(",");

// //     // console.log(sheepValue); 
    
// //     if (sheepValue[1] == "red") {

// //         let arrNameSheep = sheepValue[0].split('');

// //         // console.log(arrNameSheep)
        
// //         if (arrNameSheep.includes('N', 'A', 'a', 'n')) {

// //             console.log(sheepValue[0]);
// //         }

// //     }  
// // }

    
// // })();


// // const init = { input: process.stdin, output: process.stdout }
// // const readline = require("readline").createInterface(init)[Symbol.asyncIterator]();

// // (async () => {
    
// //     let numberSheeps = (await readline.next()).value

// //     let count = 0, arrSheeps = []; 

// //     while(numberSheeps > count) {
// //         sheep = (await readline.next()).value
// //         arrSheeps.push(sheep)
// //         count++
// //     }

// //     // console.log(arrSheeps); [ 'Noa,blue', 'Euge,red', 'Ki Na Ma,red' ]

// //     for (let i = 0; i < arrSheeps.length; i++) {
    
// //     let sheepValue = arrSheeps[i].split(",");

// //     // console.log(sheepValue); 
    
// //     if (sheepValue[1] == "red") {

// //         let arrNameSheep = sheepValue[0].split('');

// //         // console.log(arrNameSheep)
        
// //         if (arrNameSheep.includes('N', 'A', 'a', 'n')) {

// //             console.log(sheepValue[0]);
// //         }

// //     }  
// // }

    
// // })();


// let numbers = "1,2,3/3,2,1"

// let arrNumbers = numbers.split("/"); 

// let arr1 = arrNumbers[0].split(",");
// let arr2 = arrNumbers[1].split(",");

// let resultArr = arr1.map(Number)
//   .map((item, i) => item + Number(arr2[i]))
//   .map((item) => item.toString());

// console.log(resultArr);


// Create an algorithm that receives from the console (use the TIP below) two lists of numbers separated by commas, each list being separated by a slash:

// const numbers = (await readline.next()).value
// // numbers => "1,2,3/3,2,1"

// Creates two lists from the received text and prints a new list by adding all the values from the two previous lists.

// "// numbers = 1,2,3/3,2,1" => [1, 2, 3] [3,2,1]
// // [1, 2, 3] + [3,2,1] => [4, 4, 4]

// Remember that to print you must use console.log() 
// TIP: To get and print values in the console you can use this code example:

// const interface = { input: process.stdin, output: process.stdout }
// const readline = require("readline").createInterface(interface)[Symbol.asyncIterator]();

// (async() => {
//      // Read values in console
//      let line1 = (await readline.next()).value
//      let line2 = (await readline.next()).value

//      // Print text in console
//      console.log(line1)
//      console.log(line2)
// })();