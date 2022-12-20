// var students = ["Shoshana", "Eulalita", "Eulaloquita", "Marianita"]; 
let students = ["Shoshanita", "Eulalita", "Eulaloquita", "Marianita"]; 
function hiStudents(student){
    console.log( `Hi, ${student}`)
}

/*esta es una forma
for(var i = 0; i<students.length;i++){
    console.log(students[i]); 
    hiStudents(students[i]); 
}
*/
// esta es más prooooooo!
for(var student of students){
    hiStudents(student); 
}

/*
CICLO WHILE
*/


function hiStudents(student){
    console.log( `While hi, ${student}`)
}

//while for drop ultimate element. 
while(students.length>0){
    console.log(students); 
    var student = students.shift(); 
    hiStudents(student);
}

