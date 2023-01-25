# js-moderno

This is a repo with documentation and ejercices to learn JS. 

# Manipulate DOM: 

Is normally use methods to manipulate the dom, here there are some methods to do it.

## Get and Set Attributes : 

    'element'.getAttribute('class')
    'element'.setAttribute('class', rojo)

## Select Elements: document.querySelector() or 

    document.querySelector --> Select one element
    document.querySelectorAll --> Select all elements

## Modify text elements in DOM: .InnerText .InnerHTML

    pointsHTML[1].innerText = 'Hello World"

    title.innerHTML = 'Manipulate DOM, from JS <br> Jump' --> Goes to HTML

## Create new elements in the DOM: document.createElement()

    const imgCard = document.createElement("img");

## Aggregate class to the new create element: 

    imgCard.classList.add("cards");
    imgCard.classList.remove("cards");

## Aggregate element to specific part of the DOM: append()

    divComputerCards.append(imgCard);

# Manipulate methods with events: 

    Used for create events with HTML elements.

    Example: 

     btnRequest.addEventListener("click", () => {})

     Is use for create a event when btnRequest is clicked. 

