//Declarativas 

function mifuncionDeclarativa(){
    console.log(1); 
}

mifuncionDeclarativa(); 

// Expresión o anonimas
var miFuncionExpresion =  function(a,b){
    return a + b; 
}

console.log(miFuncionExpresion(3,4)); 

//arrow functions:

let myArrowFunctionSum = (a,b)=>{
    // return a + b; 
    console.log( a + b);
}

myArrowFunctionSum(1,3); 
console.log(myArrowFunctionSum(1,2));  

miFuncionExpresion(); 

// Algunas funciones

//funcion saludar simple
function saludarEstudiantes(estudiante){
    console.log("Hola " + estudiante + " cómo estás?")
}

//funcion saludar más complejo
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}

// sum
function sumar(a,b){
    var resultado = a+b; 
    return resultado; 
}
