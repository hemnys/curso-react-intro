import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const {
    totalTodos,
    completedTodos
  } = useContext(TodoContext);
  return (
    <h1 className='heading'>Has completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> TODOs</h1>
  )
}

export { TodoCounter }