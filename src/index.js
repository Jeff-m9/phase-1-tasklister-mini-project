document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    createTodo(event.target.elements["new-task-description"].value);
    form.reset();

  });
});

const createTodo = (todo) => {
  let li = document.createElement("li");
  let button = document.createElement("button");
  

  button.addEventListener("click", deleteTask);
  button.textContent = "Done";

  li.textContent = `${todo} `;
  li.appendChild(button);

  document.querySelector("#tasks").appendChild(li);
};

const deleteTask = (event) => {
  event.target.parentNode.remove();
};

const dateDue = (e) => {
  e.target.elements["date-due"].value;
};