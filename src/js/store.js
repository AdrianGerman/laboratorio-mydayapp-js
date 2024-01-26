export const TODOS = [];

export const getTodo = (id) => {
  return TODOS.find((TODO) => TODO.id == id);
};

export const addTodo = (title) => {
  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
  };
  TODOS.push(newTodo);
  return newTodo;
};

export const updateTodo = (id, data) => {
  const todoIndex = TODOS.findIndex((TODO) => TODO.id == id);
  TODOS[todoIndex] = {
    ...TODOS[todoIndex],
    ...data,
  };
  return TODOS[todoIndex];
};

export const deleteTodo = (id) => {
  const todoIndex = TODOS.findIndex((TODO) => TODO.id == id);
  return TODOS.splice(todoIndex, 1);
};
