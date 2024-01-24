export const TODOS = [];

export const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };
  TODOS.push(newTodo);
  return newTodo;
};
