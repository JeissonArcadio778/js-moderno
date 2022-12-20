/*
function auto(marca, modelo, annio){
    this.marca = marca; 
    this.modelo = modelo; 
    this.annio = annio; 
}

function ingresarValores(){
    marca = prompt("Ingrese la marca:"); 
    modelo = prompt("Ingrese el modelo: "); 
    annio = prompt("Ingrese el annio: ")
    var nuevoAuto = new auto(marca, modelo, annio);
    return nuevoAuto; 
}

for(var i = 0; i<3; i++){
  ingresarValores();
  var autosArray = []; 
  var autosAGG = autosArray.push(nuevoAuto); 
  for(var auto of autosArray){
      console.log(auto); 
  }
}

*/

function auto (marca, modelo, annio){
    this.marca = marca; 
    this.modelo = modelo; 
    this.annio = annio; 
}

var autos= []; 

for(var i = 0; i <3; i++){
    var marca = prompt("Marca: "); 
    var modelo = prompt("Modelo: ");
    var annio = prompt("Annio: "); 
    autos.push(new auto(marca,modelo, annio)); 
}

for(var auto of autos){
    console.log(auto); 
}

for(var i =0; i<autos.length; i++){
    console.log(autos[i]); 
}
