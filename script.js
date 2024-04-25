// list of all todo items
const allItems = [
            { id: 1, day: 'monday', task: 'Complete assignment' },
            { id: 2, day: 'monday', task: 'Attend meeting' },
            { id: 3, day: 'monday', task: 'Submit report' },
            { id: 4, day: 'tuesday', task: 'Go to gym' },
            { id: 5, day: 'tuesday', task: 'Prepare presentation' },
            { id: 6, day: 'wednesday', task: 'Buy groceries' },
            { id: 7, day: 'wednesday', task: 'Cook dinner' },
            { id: 8, day: 'wednesday', task: 'Clean kitchen' },
            { id: 9, day: 'thursday', task: 'Meeting with client' },
            { id: 10, day: 'thursday', task: 'Send emails' },
            { id: 11, day: 'friday', task: 'Finish project' },
            { id: 12, day: 'friday', task: 'Review code' },
            { id: 13, day: 'saturday', task: 'Clean the house' },
            { id: 14, day: 'saturday', task: 'Do laundry' },
            { id: 15, day: 'saturday', task: 'Go for a walk' },
            { id: 16, day: 'sunday', task: 'Relax and watch movie' },
            { id: 17, day: 'sunday', task: 'Meet friends for brunch' },
            { id: 18, day: 'sunday', task: 'Plan for the week' }
        ]; 
completed = [
            { id: 5, day: 'tuesday', task: 'Prepare presentation' },
            { id: 13, day: 'saturday', task: 'Clean the house' },
            { id: 14, day: 'saturday', task: 'Do laundry' },
            { id: 17, day: 'sunday', task: 'Meet friends for brunch' },
        ]; // list of all items that are currently marked as completed
uncompleted = [
            { id: 1, day: 'monday', task: 'Complete assignment' },
            { id: 2, day: 'monday', task: 'Attend meeting' },
            { id: 3, day: 'monday', task: 'Submit report' },
            { id: 4, day: 'tuesday', task: 'Go to gym' },
            { id: 6, day: 'wednesday', task: 'Buy groceries' },
            { id: 7, day: 'wednesday', task: 'Cook dinner' },
            { id: 8, day: 'wednesday', task: 'Clean kitchen' },
            { id: 9, day: 'thursday', task: 'Meeting with client' },
            { id: 10, day: 'thursday', task: 'Send emails' },
            { id: 11, day: 'friday', task: 'Finish project' },
            { id: 12, day: 'friday', task: 'Review code' },
            { id: 15, day: 'saturday', task: 'Go for a walk' },
            { id: 16, day: 'sunday', task: 'Relax and watch movie' },
            { id: 18, day: 'sunday', task: 'Plan for the week' }
        ]; // list of all items that still need to be completed


// onclick function to blur -ishaan
function changeClass(element) {

    if (element.classList.contains('todo')) {
        element.classList.remove('todo');
        element.classList.add('done');

        //change item from uncompleted to completed
        item = uncompleted.find(i => i.id === parseInt(element.id));
        uncompleted = uncompleted.filter(check => check !== item);
        completed.push(item);
        
        // Move the completed item to the bottom of the list
        const parent = element.parentNode;
        parent.appendChild(element);
    } else {
        element.classList.remove('done');
        element.classList.add('todo');

        //change item from completed to uncompleted
        item = completed.find(i => i.id === parseInt(element.id));
        completed = completed.filter(check => check !== item);
        uncompleted.push(item);
    }
}

// onclick function to remove all done
function removeDone()
{
    var comp = document.querySelectorAll('.done');
    comp.forEach(done => {
        item = completed.find(i => i.id === parseInt(done.id));
        completed = completed.filter(check => check !== item);
        done.remove();
    });
}



// Function to add tasks to the list for a specific day
function addTasksForDay(day, taskList) {
    // Filter tasks for the selected day
    const uncompletedTasks = uncompleted.filter(task => task.day === day);
    const completedTasks = completed.filter(task => task.day === day);

    // Render uncompleted tasks (added id and onclick function -ishaan)
    uncompletedTasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('id', task.id.toString());
        li.textContent = task.task;
        li.classList.add('task', 'todo');
        li.addEventListener('click', function() {changeClass(li)});
        taskList.appendChild(li);
    });

    // Render completed tasks (added id and onclick function -ishaan)
    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('id', task.id.toString());
        li.textContent = task.task;
        li.classList.add('task', 'done');
        li.addEventListener('click', function() {changeClass(li)});
        taskList.appendChild(li);
    });
}

// Function to render tasks for selected day
function renderTasks(day) {
    const taskList = document.getElementById(`${day}Tasks`);
    taskList.innerHTML = ''; // Clear existing tasks
    addTasksForDay(day, taskList);
}

// Event listener for day dropdown change
document.querySelectorAll('.dayDropdown').forEach(dropdown => {
    dropdown.addEventListener('toggle', function () {
        if (this.open) {
            const selectedDay = this.id.replace('Dropdown', '');
            renderTasks(selectedDay);
        }
    });
});
