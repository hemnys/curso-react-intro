import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo-list__item">
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p
        className={`todo-list__item__content ${
          completed && "todo-list__item__content__completed"
        }`}
      >
        {text}
      </p>
      <DeleteIcon completed={completed} onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
