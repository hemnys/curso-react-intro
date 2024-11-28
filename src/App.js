
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
   <>
    <TodoCounter total={3} completed={2} />
    <TodoSearch />
    <TodoList>
      { todos.map(todo => (
        <TodoItem key={todo.text} {...todo} />)  
      )}
    </TodoList>
    <CreateTodoButton />
   </>
  );
}

export default App;
