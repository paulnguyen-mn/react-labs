export const addTodo = (newTodo) => ({
  type: 'todo/add',
  payload: newTodo,
});

export const removeTodo = (id) => ({
  type: 'todo/remove',
  payload: id,
});
