console.log('Hello World');


// Get objects from HTML 

const title = document.querySelector("h1"); 

// title.innerText = 'Manipulate DOM, from JS'

title.innerHTML = 'Manipulate DOM, from JS <br> Jump'


// Created a new addEvent Listen : 

const btn_cal = document.querySelector('#btn-cal'); 
const num_1 = document.querySelector('#cal-1'); 
const num_2 = document.querySelector('#cal-2'); 
const p_result = document.querySelector('#p-result'); 
const form = document.querySelector('#form'); 


form.addEventListener('click', (event) => {

    console.log(event);
    event.preventDefault()
    const sum = num_1.value + num_2.value
    
    p_result.innerText = "Result: " + sum

})

