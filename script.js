const allItems = []; // list of all todo items
const completed = []; // list of all items that are currently marked as completed
const uncompleted = []; // list of all items that still need to be completed

fetchJSON(`./example.json`);

function fetchJSON(filename) {
  fetch(filename)
    .then((response) => {
      if (!response.ok) {
        console.error("JSON file not found");
      }
      return response.json();
    })
    .then((data) => {
      data.tasks.forEach((task) => {
        const item = [task.title, task.day];
        allItems.push(item);
        if (task.completed) {
          completed.push(item);
        } else {
          uncompleted.push(item);
        }
      });
    });
}

function createTodo() {
  console.log(uncompleted);
  if (
    document.getElementById("todoInput").value == "" ||
    document.getElementById("dayInput").value == ""
  ) {
    return false;
  }

  const item = [
    document.getElementById("todoInput").value,
    document.getElementById("dayInput").value,
  ];
  allItems.push(item);
  uncompleted.push(item);
  document.getElementById("todoInput").value = "";
  document.getElementById("dayInput").value = "";
  console.log(allItems); // can check that item is being added through Javascript console
  return false;
}
