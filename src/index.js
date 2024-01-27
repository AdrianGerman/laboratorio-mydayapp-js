import "./css/base.css";
import { TODOS } from "./js/store";
import {
  renderTodo,
  addTodoController,
  deleteCompletedTodos,
  // visibilidad del boton "clear completed"
  visibilityToClearCompleteTodos,
} from "./js/utils";

(function loadData() {
  TODOS.forEach((TODO) => renderTodo(TODO));
})();

const $newTodo = document.querySelector(".new-todo");
$newTodo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodoController(e.target.value);
    e.target.value = "";
  }
});

const $clearCompletedTodosButton = document.querySelector(".clear-completed");
$clearCompletedTodosButton.addEventListener("click", deleteCompletedTodos);
visibilityToClearCompleteTodos();
