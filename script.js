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
const completed = [
            { id: 5, day: 'tuesday', task: 'Prepare presentation' },
            { id: 13, day: 'saturday', task: 'Clean the house' },
            { id: 14, day: 'saturday', task: 'Do laundry' },
            { id: 17, day: 'sunday', task: 'Meet friends for brunch' },
        ]; // list of all items that are currently marked as completed
const uncompleted = [
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

// Function to add tasks to the list for a specific day
function addTasksForDay(day, taskList) {
    // Filter tasks for the selected day
    const uncompletedTasks = uncompleted.filter(task => task.day === day);
    const completedTasks = completed.filter(task => task.day === day);

    // Render uncompleted tasks
    uncompletedTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.task;
        li.classList.add('task');
        taskList.appendChild(li);
    });

    // Render completed tasks
    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.task;
        li.classList.add('task', 'checked');
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
