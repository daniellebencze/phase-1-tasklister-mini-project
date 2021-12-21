// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = (event) => {
  event.preventDefault();
  //stop form from trying to submit
  const newTask = document.createElement("li");
  const newTaskDescription = document.getElementById("new-task-description");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};
