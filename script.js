// list of all todo items

allTasks = []; // list of all todo items
completed = []; // list of all items that are currently marked as completed
uncompleted = []; // list of all items that still need to be completed

loadJSON(`./example.json`); // We should only allow tasks to be added when the loadJSON is finished

// Event listener for day dropdown change
document.querySelectorAll(".dayDropdown").forEach((dropdown) => {
  dropdown.addEventListener("toggle", function () {
    if (this.open) {
      const selectedDay = this.id.replace("Dropdown", "");
      renderTasks(selectedDay);
    }
  });
});

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
      allTasks.forEach((task) => {
        task.day = task.day.toLowerCase();
      });
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
    day: day.toLowerCase(),
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
  if (document.getElementById("titleInput").value == "") {
    return false;
  }
  taskTitle = document.getElementById("titleInput").value;
  taskDay = document.getElementById("dayInput").value;
  addTask(taskTitle, taskDay, false);
  document.getElementById("titleInput").value = "";
  return false;
}

// onclick function to blur -ishaan
function changeClass(element) {
  if (element.classList.contains("todo")) {
    element.classList.remove("todo");
    element.classList.add("done");

    //change item from uncompleted to completed
    item = uncompleted.find((i) => i.id === parseInt(element.id));
    uncompleted = uncompleted.filter((check) => check !== item);
    completed.push(item);

    // Move the completed item to the bottom of the list
    const parent = element.parentNode;
    parent.appendChild(element);
  } else {
    element.classList.remove("done");
    element.classList.add("todo");

    //change item from completed to uncompleted
    item = completed.find((i) => i.id === parseInt(element.id));
    completed = completed.filter((check) => check !== item);
    uncompleted.push(item);
  }
}

// onclick function to remove all done
function removeDone() {
  var comp = document.querySelectorAll(".done");
  comp.forEach((done) => {
    item = completed.find((i) => i.id === parseInt(done.id));
    completed = completed.filter((check) => check !== item);
    done.remove();
  });
}

// Function to add tasks to the list for a specific day
function addTasksForDay(day, taskList) {
  // Filter tasks for the selected day
  const uncompletedTasks = uncompleted.filter((task) => task.day === day);
  const completedTasks = completed.filter((task) => task.day === day);

  // Render uncompleted tasks (added id and onclick function -ishaan)
  uncompletedTasks.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute("id", task.id.toString());
    li.textContent = task.title;
    li.classList.add("task", "todo");
    li.addEventListener("click", function () {
      changeClass(li);
    });
    taskList.appendChild(li);
  });

  // Render completed tasks (added id and onclick function -ishaan)
  completedTasks.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute("id", task.id.toString());
    li.textContent = task.title;
    li.classList.add("task", "done");
    li.addEventListener("click", function () {
      changeClass(li);
    });
    taskList.appendChild(li);
  });
}

// Function to render tasks for selected day
function renderTasks(day) {
  const taskList = document.getElementById(`${day}Tasks`);
  taskList.innerHTML = ""; // Clear existing tasks
  addTasksForDay(day, taskList);
}
