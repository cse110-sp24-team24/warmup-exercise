const allItems = []; // list of all todo items
const completed = []; // list of all items that are currently marked as completed
const uncompleted = []; // list of all items that still need to be completed

function createTodo() {
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
  completed.push(item);
  document.getElementById("todoInput").value = "";
  document.getElementById("dayInput").value = "";
  console.log(allItems); // can check that item is being added through Javascript console
  return false;
}
