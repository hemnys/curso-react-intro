import React from 'react'
import { TodoIcon } from './TodoIcon'

function DeleteIcon({ completed, onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }