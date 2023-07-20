const form = document.getElementById("form");
const input = document.getElementById("input");
const todoListUL = document.getElementById("todolist");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  console.log(todoText);

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("finshed");
    }
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("finshed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todoListUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("finshed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
