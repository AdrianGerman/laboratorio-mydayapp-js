import "./css/base.css";
import { router } from "./js/router";
import {
  addTodoController,
  deleteCompletedTodos,
  visibilityToClearCompleteTodos,
} from "./js/utils";

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);

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
