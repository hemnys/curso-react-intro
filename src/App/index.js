import { useState } from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";


function App() {

  const {item:todos, saveItem:saveTodos,loading,error} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <AppUI
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    filteredTodos = {filteredTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    loading = {loading}
    error = {error}
    />
  );
}

export default App;
