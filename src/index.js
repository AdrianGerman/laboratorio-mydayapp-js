// import "./css/base.css";
import "./css/style.css";
import { router } from "./js/router";
import {
  addTodoController,
  deleteCompletedTodos,
  visibilityToClearCompleteTodos,
  setFilterLinkActive,
} from "./js/utils";

window.addEventListener("DOMContentLoaded", () => {
  router();
  setFilterLinkActive();
});
window.addEventListener("hashchange", () => {
  router();
  setFilterLinkActive();
});

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
