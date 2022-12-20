var articulos = [
    { nombre: "Bici", costo: 3000}, 
    { nombre: "tv", costo: 3300},
    { nombre: "celuco", costo: 4000},
    { nombre: "moto", costo: 9000},
    { nombre: "pc", costo: 5000},
    { nombre: "desktop", costo: 3000},
]; 

//este crea un nuevo array: FILATRAR COSAS ESPECIFICAS
var artuculosPorPrecio = articulos.filter(function(articulo){
    return articulo.costo <= 3000; 
}); 
console.log(artuculosPorPrecio); 

//METODO MAP: ayuda a mapear ciertos articulos y crea un nuevo array
var nombreArticulso = articulos.map(function(articulo){
    return articulo.nombre; //me trae los nombre en string
}); 
console.log(nombreArticulso); 

//FIND, find a thing. Devuelve un TRUE O FALSE. Return the thing
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "celuco"; 
}); 
console.log(encuentraArticulo); 

//muestra los nombres del articulo
articulos.forEach(function(articulo){
     console.log(articulo.nombre); 
 }); 

 //TRUE OR FALSE with objects into articulos
 var articulosBaratos = articulos.some(function(articulo){
     return articulo.costo <=3000; 
 }); 

 console.log(articulosBaratos); 

 //ELIMINAR POR POSICION
 var frutas = ["pera", "banana", "manzana", "trigo"]
//posicion  	0 		1		 2		 3

// frutas.splice(pos,nº de elementos por eliminar) // metodo

//EJM:
frutas.splice(2,1)
frutas // [“pera”, “banana”, “trigo”]

//EJM 2: mismo array
frutas.splice(2,2)
frutas // [“manzana”, “trigo”]
