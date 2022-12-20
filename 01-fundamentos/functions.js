const listaFunc = () => {
    // return 1,2; IMPOSIBOL 
    return [1,2,3]; 
}

//Return what is this variable
console.log(listaFunc); //[Function: listaFunc]

//If I only need a position 0 in the list
const returnClass = listaFunc(); 
console.log(returnClass[0]);

// Ejercice:

const getAleatory = () => Math.floor(Math.random()*122); 

console.log(getAleatory());
