const axios = require('axios'); 

let url = 'https://jsonplaceholder.typicode.com/todos'; 

let data = {
    name: 'Eulaloquita',
    alias: 'Sara',
    age: 20
}

let config = {
    headers: {
        Authorization: "12345..."
    }
}

// Return promise 
axios.post(url,data, config).then(response =>{
    console.log(response.data);
    let person = response.data; 
    console.log('My name is '+ person.name);
}) ;

