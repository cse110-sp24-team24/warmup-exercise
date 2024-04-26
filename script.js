const DaysOfWeek = {
    MONDAY: 'monday',
    TUESDAY: 'tuesday',
    WEDNESDAY: 'wednesday',
    THURSDAY: 'thursday',
    FRIDAY: 'friday',
    SATURDAY: 'saturday',
    SUNDAY: 'sunday'
};

// list of all todo items
const allItems = [
            { id: 1, day: DaysOfWeek.MONDAY, task: 'Complete assignment' },
            { id: 2, day: DaysOfWeek.MONDAY, task: 'Attend meeting' },
            { id: 3, day: DaysOfWeek.MONDAY, task: 'Submit report' },
            { id: 4, day: DaysOfWeek.TUESDAY, task: 'Go to gym' },
            { id: 5, day: DaysOfWeek.TUESDAY, task: 'Prepare presentation' },
            { id: 6, day: DaysOfWeek.WEDNESDAY, task: 'Buy groceries' },
            { id: 7, day: DaysOfWeek.WEDNESDAY, task: 'Cook dinner' },
            { id: 8, day: DaysOfWeek.WEDNESDAY, task: 'Clean kitchen' },
            { id: 9, day: DaysOfWeek.THURSDAY, task: 'Meeting with client' },
            { id: 10, day: DaysOfWeek.THURSDAY, task: 'Send emails' },
            { id: 11, day: DaysOfWeek.FRIDAY, task: 'Finish project' },
            { id: 12, day: DaysOfWeek.FRIDAY, task: 'Review code' },
            { id: 13, day: DaysOfWeek.SATURDAY, task: 'Clean the house' },
            { id: 14, day: DaysOfWeek.SATURDAY, task: 'Do laundry' },
            { id: 15, day: DaysOfWeek.SATURDAY, task: 'Go for a walk' },
            { id: 16, day: DaysOfWeek.SUNDAY, task: 'Relax and watch movie' },
            { id: 17, day: DaysOfWeek.SUNDAY, task: 'Meet friends for brunch' },
            { id: 18, day: DaysOfWeek.SUNDAY, task: 'Plan for the week' }
        ]; 
const completed = [
            { id: 5, day: DaysOfWeek.TUESDAY, task: 'Prepare presentation' },
            { id: 13, day: DaysOfWeek.SATURDAY, task: 'Clean the house' },
            { id: 14, day: DaysOfWeek.SATURDAY, task: 'Do laundry' },
            { id: 17, day: DaysOfWeek.SUNDAY, task: 'Meet friends for brunch' },
        ]; // list of all items that are currently marked as completed
const uncompleted = [
            { id: 1, day: DaysOfWeek.MONDAY, task: 'Complete assignment' },
            { id: 2, day: DaysOfWeek.MONDAY, task: 'Attend meeting' },
            { id: 3, day: DaysOfWeek.MONDAY, task: 'Submit report' },
            { id: 4, day: DaysOfWeek.TUESDAY, task: 'Go to gym' },
            { id: 6, day: DaysOfWeek.WEDNESDAY, task: 'Buy groceries' },
            { id: 7, day: DaysOfWeek.WEDNESDAY, task: 'Cook dinner' },
            { id: 8, day: DaysOfWeek.WEDNESDAY, task: 'Clean kitchen' },
            { id: 9, day: DaysOfWeek.THURSDAY, task: 'Meeting with client' },
            { id: 10, day: DaysOfWeek.THURSDAY, task: 'Send emails' },
            { id: 11, day: DaysOfWeek.FRIDAY, task: 'Finish project' },
            { id: 12, day: DaysOfWeek.FRIDAY, task: 'Review code' },
            { id: 15, day: DaysOfWeek.SATURDAY, task: 'Go for a walk' },
            { id: 16, day: DaysOfWeek.SUNDAY, task: 'Relax and watch movie' },
            { id: 18, day: DaysOfWeek.SUNDAY, task: 'Plan for the week' }
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
    const taskList = document.querySelector(`[data-day="${day}"] .dayTasks`);
    taskList.innerHTML = ''; // Clear existing tasks
    addTasksForDay(day, taskList);
}


// Render tasks for each day after the data is loaded
document.querySelectorAll('[data-day]').forEach(dropdown => {
    const selectedDay = dropdown.getAttribute('data-day');
    renderTasks(selectedDay);
});