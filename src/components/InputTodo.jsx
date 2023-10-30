import { addTodoError, addTodoPending, addTodoSuccess } from '@/stores/Action';
import '@/styles/input.css';
import { showToastError } from '@/utils/toast';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const InputTodo = () => {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task === '') return showToastError('Please enter data input');

    try {
      dispatch(addTodoPending());
      setTimeout(() => {
        dispatch(addTodoSuccess(task));
      }, 2000);
    } catch (error) {
      dispatch(addTodoError(error))
    }
  };

  return (
    <>
      <form className="TodoInput" onSubmit={handleAddTodo}>
        <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
      </form>
    </>
  );
};

export default InputTodo;
