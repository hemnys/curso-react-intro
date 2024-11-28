import './TodoItem.css'

function TodoItem({ text, completed }) {
  return (
   <li className="todo-list__item">
    <span className={`icon icon-check${completed && ' icon-check__active'}`}>V</span>
    <p className={`todo-list__item__content${completed && ' todo-list__item__content__completed'}`}>{text}</p>
    <span className="icon icon-delete">X</span>
   </li>
  )
}

export { TodoItem }