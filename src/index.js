import "./css/base.css";

import { addTodoController } from "./js/utils";

const $newTodo = document.querySelector(".new-todo");
$newTodo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodoController(e.target.value);
    e.target.value = "";
  }
});
