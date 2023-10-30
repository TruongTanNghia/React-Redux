import { ToastContainer } from 'react-toastify';
import TodoList from './page/todos/todoList';
import '@/styles/style.css';

function App() {
  return (
    <>
      <TodoList />
      <ToastContainer />
    </>
  );
}

export default App;
