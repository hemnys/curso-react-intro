import './TodoSearch.css'
function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input className='search-component' placeholder="Cortar la cebolla" value={ searchValue } onChange={(event)=>{setSearchValue(event.target.value)}} />
  )
}
export { TodoSearch }