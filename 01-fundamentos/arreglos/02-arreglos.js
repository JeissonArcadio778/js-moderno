let books = [
    'El amor en los tiempos del cólera',
    'El señor de los anillos', 
    'Los hombres son de júpites y las mujeres con de venus', 
    'El olvido que seremos'
]

// Length: largo de los elementos
console.log(books.length);

// Primer elemento
console.log(books[2-2]);

// Ultimo elemento. Dentro de las llaves se pueden hacer cálculos matemáticos.
console.log(books[books.length - 1]);


// Recorrer cada uno de los elementos con ciclos. Ejecuta una instrucción como yo le diga.
books.forEach( (libro, i) => {
    console.log({libro, i});
})

// PUSH : INSERT ELEMENT in the final
let newLength = books.push('La insoportable levedad del ser'); 
console.log({newLength, books});

// UNSHIFT: Inset in the start of array
newLength = books.unshift('Harry Potter')
console.log({newLength, books});


// DELETE: delete end element : POP
let deletedElement = books.pop();
console.log({deletedElement, books});

//SPLICE: apartir de cuál element i will go to deleted and how many elements deleted after it, if its necessary you can replace elements for others.
let pos = 2; 
let booksDeleted = books.splice( pos, 2); 
console.log({booksDeleted, books});

// SABER POSICION DE ELEMENTO: INDEX OF. (-1): Not Exists.
let harryIndex = books.indexOf('Harry Potter'); 
console.log({harryIndex});



