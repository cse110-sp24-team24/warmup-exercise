function changeClass(element) {
    if (element.classList.contains('todo')) {
        element.classList.remove('todo');
        element.classList.add('done');
    } else {
        element.classList.remove('done');
        element.classList.add('todo');
    }
}


// This code toggles the class of list items onclick. todo means task is still todo,
// done means task is done (styling is done in css to represent done vs not done)



// TODO

// add functionality that moves list item to bottom of list when it is in "done" class


// add a button that removes all "done" class list items from the list
