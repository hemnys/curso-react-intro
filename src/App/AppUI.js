import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    error,
    loading,
    filteredTodos,
    completeTodo,
    deleteTodo
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && !filteredTodos.length && <TodosEmpty />}
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

export { AppUI };
