import './CreateTodoButton.css'
function CreateTodoButton({ setOpenModal }) {
  return (
   <button type="button" className="create-todo" onClick={()=>{ setOpenModal(state => !state )}}>+</button>
  )
}

export { CreateTodoButton }