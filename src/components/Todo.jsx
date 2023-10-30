import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const Todo = ({ id, task, completed }) => {
  return (
    <>
      <TransitionGroup className={completed ? 'Todo completed' : 'Todo'}>
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task">{task}</li>
        </CSSTransition>
        <div className="Todo-buttons">
          <button>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>

          <button>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
      </TransitionGroup>
    </>
  );
};

export default Todo;
