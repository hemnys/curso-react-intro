import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Usar estados derivado", completed: true },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function App() {

  const localStorageTodos = localStorage.getItem("TODOS_V1") || "[]";
  let parsedTodos = JSON.parse(localStorageTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(parsedTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  }
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
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            {...todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
