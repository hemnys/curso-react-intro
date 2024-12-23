import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
    const {
        item:todos, 
        saveItem:saveTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1", []);

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
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodo,
            deleteTodo,
            loading,
            error
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
