//* Style
import '@/styles/todo_list.css';
import InputTodo from '@/components/InputTodo';
import useTodoList from '@/hooks/useTodoList';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todo from '@/components/Todo';
const TodoList = () => {
  const { todos } = useTodoList();

  console.log(todos);
  return (
    <div className="TodoList">
      <h1>TodoList Code 3 Day Chưa Done🔥</h1>
      <InputTodo />
      <ul>
        <TransitionGroup className="todo-List">
          {todos &&
            todos.map((todo) => {
              return (
                <CSSTransition key={todo.id} classNames="todo">
                  <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoList;
