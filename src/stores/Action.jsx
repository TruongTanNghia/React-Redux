import * as TYPES from './ActionType';

//* Add todo
export const addTodoPending = () => ({
  type: TYPES.ADD_TODO_PENDING,
});
export const addTodoSuccess = (todo) => ({
  type: TYPES.ADD_TODO_SUCCESS,
  payload: todo,
});
export const addTodoError = (error) => ({
  type: TYPES.ADD_TODO_ERROR,
  payload: error,
});

//* Remove Todo
export const removeTodoPending = () => ({
  type: TYPES.REMOVE_TODO_PENDING,
});
export const removeTodosuccess = (todoId) => ({
  type: TYPES.REMOVE_TODO_SUCCESS,
  payload: todoId,
});
export const removeTodoError = (error) => ({
  type: TYPES.REMOVE_TODO_ERROR,
  payload: error,
});

//* Edit Todo
export const editTodoPending = () => ({
  type: TYPES.EDIT_TODO_PENDING,
});
export const editTodosuccess = (todoUpdate) => ({
  type: TYPES.EDIT_TODO_SUCCESS,
  payload: todoUpdate,
});
export const editTodoError = (error) => ({
  type: TYPES.EDIT_TODO_ERROR,
  payload: error,
});
