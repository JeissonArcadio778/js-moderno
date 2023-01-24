// Objects: element list where each element has a key. We can find one element with this name. 

// Note: when is better use Array or Objects? Easy: when we need use the name for each value in the element. 

let miAuto = {
    marca : "Kia",
    modelo:"Picanto", 
    annio :  2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}; 

//ingresar a los atributos o propiedades
miAuto.marca;
//SAME
miAuto['marca']

//ingresar a un metodo del objeto
miAuto.detalleDelAuto(); 


// FUNCTION CONSTRUCTOR:

/*
class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}
*/

function auto(marca, modelo, annio){
    this.marca = marca; 
    this.modelo = modelo; 
    this.annio = annio; 
}


//instanciar el objeto

let nuevoAuto = new auto("Tesla", "Model X", 2023); 


//Convert Object in Array 

const myCarArr = Object.values(miAuto); 

console.log({myCarArr});

//Iterate: 

for (let i = 0; i < myCarArr.length; i++) {
    let value = myCarArr[i]; 
    console.log(value);
}

// Challenge

const subscription = {
    "Free" : "Solo puedes tomar los cursos gratis",
    "Basic" : "Puedes tomar casi todos los cursos de Platzi durante un mes", 
    "Expert" : "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus" : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}; 

let option = 'Free'; 

    if (subscription[option]) {
        console.log(subscription[option]);
    }else {
        console.log('F');
    }



const arrSubsCription = [
    ["Free" , "Solo puedes tomar los cursos gratis"],
    ["Basic" , "Puedes tomar casi todos los cursos de Platzi durante un mes"], 
    ["Expert" , "Puedes tomar casi todos los cursos de Platzi durante un año"],
    ["ExpertPlus" , "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]
]; 


option = 'Free'; 

for (let i = 0; i < arrSubsCription.length; i++) {
    
    if (option == arrSubsCription[i][0]) {
        console.log(arrSubsCription[i]);
    }
}
