import React from 'react'
import { TodoIcon } from '.'

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