// function changeClass(element) {
//     if (element.classList.contains('todo')) {
//         element.classList.remove('todo');
//         element.classList.add('done');
//     } else {
//         element.classList.remove('done');
//         element.classList.add('todo');
//     }
// }
function changeClass(element) {
    if (element.classList.contains('todo')) {
        element.classList.remove('todo');
        element.classList.add('done');
        
        // Move the completed item to the bottom of the list
        const parent = element.parentNode;
        parent.appendChild(element);
    } else {
        element.classList.remove('done');
        element.classList.add('todo');
    }
}

// This code toggles the class of list items onclick. todo means task is still todo,
// done means task is done (styling is done in css to represent done vs not done)



// TODO



// add a button that removes all "done" class list items from the list
