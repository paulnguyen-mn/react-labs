export const addTodo = (newTodo) => ({
  type: 'todo/add',
  payload: newTodo,
});

export const updateTodo = (todo) => ({
  type: 'todo/update',
  payload: todo,
});

export const removeTodo = (id) => ({
  type: 'todo/remove',
  payload: id,
});

export const setFilters = (filters) => ({
  type: 'todo/setFilters',
  payload: filters,
});
