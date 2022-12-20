var miAuto = {
    marca: "Kia",
    modelo:"Picanto", 
    annio:2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}; 

//ingresar a los atributos o propiedades
miAuto.marca;

//ingresar a un metodo del objeto
miAuto.detalleDelAuto(); 


// FUNCTION CONSTRUCTOR

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

var nuevoAuto = new auto("Tesla", "Model X", 2023); 

