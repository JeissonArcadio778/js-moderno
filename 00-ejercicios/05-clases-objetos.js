// Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones

const resultsSubjects = {
    "Student" : 'Jeisson', 
    "English" : 4.6,
    "AWS" : 5.0,
    "HTML": 4.3,
    "NodeJS" : 5.0
}; 

let notes = `The student ${resultsSubjects.Student} doesn't have notes`; 
let values = 0; 
for (let i = 1; i < resultsSubjects.length; i++) {
     values = resultsSubjects[i][0]; 
     notes += values;
}

console.log({values, notes});