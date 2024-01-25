import { getTodo, addTodo, updateTodo } from "./store";
import { todoTemplateCreator } from "./templates";

export const addTodoController = (text) => {
  // Validacion de texto
  const newTodoText = text.trim();
  if (!newTodoText) return;

  // Agrega TODO al estado global
  const newTodo = addTodo(newTodoText);

  // Creacion de nodo
  const $todoElement = document.createElement(null);
  const todoTemplate = todoTemplateCreator(newTodo);
  $todoElement.innerHTML = todoTemplate;

  //Agregando eventos
  const $todoStatusCheckbox = $todoElement.querySelector("input.toggle");
  const $todoLabel = $todoElement.querySelector("label");
  const $todoEditInput = $todoElement.querySelector("input.edit");
  $todoStatusCheckbox.addEventListener("change", (e) =>
    updateTodoStatus(newTodo.id, e.target.checked)
  );

  $todoLabel.addEventListener("dblclick", () =>
    activateTodoEditMode(newTodo.id)
  );
  $todoEditInput.addEventListener("focusout", () =>
    disableTodoEditMode(newTodo.id)
  );
  $todoEditInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") updateTodoText(newTodo.id, e.target.value);
    if (e.key === "Escape") $todoEditInput.blur();
  });

  // Agrega nodo al HTML
  const $todoList = document.querySelector(".todo-list");
  $todoList.appendChild($todoElement.firstElementChild);

  // Hacer visible cuando exista alguna tarea o todo
  const $todoContainer = document.querySelector(".todoapp-wrapper");
  if ($todoContainer.classList.contains("inactive"))
    $todoContainer.classList.remove("inactive");
};

export const updateTodoText = (todoId, text) => {
  // Validacion de texto
  const newTodoText = text.trim();
  if (!newTodoText) return;
  // Actualiza TODO en el estado global
  updateTodo(todoId, { title: newTodoText });
  // Actualizar TODO en el HTML y deshabilita modo edición
  const $todoContainer = document.querySelector(`li[data-todo-id="${todoId}"]`);
  const $todoLabel = $todoContainer.querySelector(`label`);
  const $todoEditInput = $todoContainer.querySelector(`input.edit`);
  $todoLabel.innerHTML = newTodoText;
  $todoEditInput.blur();
};

export const updateTodoStatus = (todoId, isCompleted) => {
  // Actualizar TODO en el estado global
  updateTodo(todoId, { completed: isCompleted });
  // Modificando estilos de HTML
  const $todoContainer = document.querySelector(`li[data-todo-id="${todoId}"]`);
  if (isCompleted) $todoContainer.classList.add("completed");
  else $todoContainer.classList.remove("completed");
};

export const activateTodoEditMode = (todoId) => {
  /// Modificando estilos de HTML
  const $todoContainer = document.querySelector(`li[data-todo-id="${todoId}"]`);
  $todoContainer.classList.add("editing");

  // Estableciendo foco en input de edicion
  const $todoEditInput = $todoContainer.querySelector("input.edit");
  $todoEditInput.value = getTodo(todoId).title;
  $todoEditInput.focus();
};

export const disableTodoEditMode = (todoId) => {
  // Modificando estilos de HTML
  const $todoContainer = document.querySelector(`li[data-todo-id="${todoId}"]`);
  $todoContainer.classList.remove("editing");
};
