allTasks = []; // list of all todo items
completed = []; // list of all items that are currently marked as completed
uncompleted = []; // list of all items that still need to be completed

loadJSON(`./example.json`); // We should only allow tasks to be added when the loadJSON is finished

//Setup
async function loadJSON(filename) {
  return fetch(filename)
    .then((response) => {
      if (!response.ok) {
        new Error("JSON file not found");
      }
      return response.json();
    })
    .then((data) => {
      if (!data.tasks) {
        new Error("incorrect JSON format");
      }
      allTasks = data.tasks;
      updateTasks();
    });
}

//This needs a better name
function updateTasks() {
  completed = [];
  uncompleted = [];
  allTasks.forEach((task) => {
    if (task.completed) {
      completed.push(task);
    } else {
      uncompleted.push(task);
    }
  });
  console.log("all:", allTasks);
  console.log("complete:", completed);
  console.log("uncomplete:", uncompleted);
  console.log(" ");
}

//Task Manipulation
function addTask(title, day, completed) {
  newTask = {
    id: Date.now(), // ideally we would have a guaranteed random but idc
    title: title,
    day: day,
    completed: completed,
  };
  allTasks.push(newTask);
  updateTasks();
}

function completeTask(id) {
  allTasks = allTasks.map((task) =>
    task.id == id ? { ...task, completed: true } : task
  );
  updateTasks();
}

function uncompleteTask(id) {
  allTasks = allTasks.map((task) =>
    task.id == id ? { ...task, completed: false } : task
  );
  updateTasks();
}

//Add Task Form
const addTaskForm = document.querySelector("#addTaskForm");
addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitAddTaskForm();
});

function submitAddTaskForm() {
  if (
    document.getElementById("titleInput").value == ""
  ) {
    return false;
  }
  taskTitle = document.getElementById("titleInput").value;
  taskDay = document.getElementById("dayInput").value;
  addTask(taskTitle, taskDay, false);
  document.getElementById("titleInput").value = "";
  return false;
}
