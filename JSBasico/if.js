//input
var edad = 19; 

if(edad===18){
    console.log("Puedes votar y es tu primera vez votando"); 
}else if(edad>18){
    console.log("Puedes votar y ya has votado"); 
}else{
    console.log("No puedes votar"); 
}

edad = 2022; 
var resultado = edad<21? true: false; 
console.log(resultado); 

//repaso 

let esforzarme = true; 
if (esforzarme){
    console.log(`Valdrá de la pena porque esforzarme es ${esforzarme}`); 
}else{
    console.log(`No podré alcanzar lo que quiero porque esforzarme es ${esforzarme}`); 
}

