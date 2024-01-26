import { TODOS, getTodo, addTodo, updateTodo, deleteTodo } from "./store";
import { todoTemplateCreator, todoCounterTemplateCreator } from "./templates";

export const renderTodo = (TODO) => {
  // Creacion de nodo
  const $todoElement = document.createElement(null);
  const todoTemplate = todoTemplateCreator(TODO);
  $todoElement.innerHTML = todoTemplate;

  //Agregando eventos
  const $todoStatusCheckbox = $todoElement.querySelector("input.toggle");
  const $todoLabel = $todoElement.querySelector("label");
  const $todoEditInput = $todoElement.querySelector("input.edit");
  const $todoDeleteButton = $todoElement.querySelector("button.destroy");

  $todoStatusCheckbox.addEventListener("change", (e) =>
    updateTodoStatus(TODO.id, e.target.checked)
  );

  $todoLabel.addEventListener("dblclick", () => activateTodoEditMode(TODO.id));
  $todoEditInput.addEventListener("focusout", () =>
    disableTodoEditMode(TODO.id)
  );
  $todoEditInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") updateTodoText(TODO.id, e.target.value);
    if (e.key === "Escape") $todoEditInput.blur();
  });
  $todoDeleteButton.addEventListener("click", () =>
    deleteTodoController(TODO.id)
  );

  // Agrega nodo al HTML
  const $todoList = document.querySelector(".todo-list");
  $todoList.appendChild($todoElement.firstElementChild);

  //Actualizar contador de TODOS
  updateTodoCounter();

  // Hacer visible cuando exista alguna tarea o todo
  const $todosContainer = document.querySelector(".todoapp-wrapper");
  if ($todosContainer.classList.contains("inactive"))
    $todosContainer.classList.remove("inactive");
};

export const addTodoController = (text) => {
  // validación de texto
  const newTodoText = text.trim();
  if (!newTodoText) return;
  // Agregar todo al estado global
  const newTodo = addTodo(newTodoText);
  // Renderizar TODO
  renderTodo(newTodo);
};

export const deleteTodoController = (todoId) => {
  //Eliminar todo del estado global
  deleteTodo(todoId);
  // Eliminar elemento HTML al todo correspondiente
  const $todoContainer = document.querySelector(`li[data-todo-id="${todoId}"]`);
  $todoContainer.remove();

  //Ocultar contenedor HTML (cuandos se borran todas las tareas)
  const $todosContainer = document.querySelector(".todoapp-wrapper");
  if (TODOS.length == 0) $todosContainer.classList.add("inactive");

  //Actualizar contador de TODOS
  updateTodoCounter();
};

export const deleteCompletedTodos = () => {
  const completedTodos = TODOS.filter((TODO) => TODO.completed);
  completedTodos.forEach((TODO) => deleteTodoController(TODO.id));
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

export const updateTodoCounter = () => {
  // Plantilla HTML
  const $todoCounterLabel = document.querySelector(".todo-count");
  const todoCounterTemplate = todoCounterTemplateCreator(TODOS.length);
  $todoCounterLabel.innerHTML = todoCounterTemplate;
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
