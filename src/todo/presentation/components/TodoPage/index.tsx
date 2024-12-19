import { useTodos } from '../../hooks/useTodos';
import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

interface TodoPageProps {
  todoHook: ReturnType<typeof useTodos>;
}

export function TodoPage({ todoHook }: TodoPageProps) {
  const { search, setSearch, addTodo, isLoading, todos, removeTodo } = todoHook;

  if (isLoading) {
    return <p>carregando...</p>;
  }

  return (
    <>
      <TodoSearch addTodo={addTodo} search={search} setSearch={setSearch} />

      <div className="flex flex-col gap-8">
        {todos.map((todo) => {
          return <TodoCard todo={todo} removeItem={removeTodo} key={`${todo.id}-${todo.title}`} />;
        })}
      </div>
    </>
  );
}

export function TodoPageFactory() {
  const todoHook = useTodos();

  return <TodoPage todoHook={todoHook} />;
}
