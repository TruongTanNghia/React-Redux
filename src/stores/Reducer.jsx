import { v4 as uuidv4 } from 'uuid';
import * as TYPES from './ActionType';
import { dataTodo } from '@/dummys/todoDummy';

const initialState = {
  loading: false,
  todos: dataTodo,
  error: null,
};

const TodoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // 1. pending
    case TYPES.ADD_TODO_PENDING:
    case TYPES.REMOVE_TODO_PENDING:
      return { ...state, loading: true };

    // 2. success

    //* ADD TODO
    case TYPES.ADD_TODO_SUCCESS:
      // lOGIC ADD TODO SUCCESS
      const newTodo = {
        id: uuidv4(),
        task: payload,
        completed: false,
      };
      const newAray = [...state.todos, newTodo];
      return {
        ...state,
        todos: newAray,
        loading: false,
      };
    //* REMOVE TODO
    case TYPES.REMOVE_TODOC:
      //* lOGIC Remover TODO
      const filtertodo = state.todos.filter((todo) => todo.id !== payload);
      return {
        ...state,
        todos: filtertodo,
        loading: false,
      };

    // 3. error
    case TYPES.ADD_TODO_ERROR:
    case TYPES.REMOVE_TODO_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return {
        ...state,
      };
  }
};
export default TodoReducer;
