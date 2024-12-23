import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'
function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);
  return (
    <input className='search-component' placeholder="Cortar la cebolla" value={ searchValue } onChange={(event)=>{setSearchValue(event.target.value)}} />
  )
}
export { TodoSearch }