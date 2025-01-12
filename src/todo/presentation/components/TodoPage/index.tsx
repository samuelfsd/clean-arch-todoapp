import { Footer } from '../../../../core/presentation/components/footer';
import { useTodos } from '../../hooks/useTodos';
import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

interface TodoPageProps {
  useTodos: ReturnType<typeof useTodos>;
}

export function TodoPage({ useTodos }: TodoPageProps) {
  const { isLoading, todos, removeTodo } = useTodos;

  if (isLoading) {
    return <p>carregando...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TodoSearch useTodos={useTodos} />

      {todos.length ? (
        <div className="flex flex-col w-full gap-8">
          {todos.map((todo) => {
            return <TodoCard todo={todo} removeItem={removeTodo} key={`${todo.id}-${todo.title}`} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-extrabold text-black">Nenhuma tarefa cadastrada!</h2>
        </div>
      )}

      <Footer />
    </div>
  );
}

export function TodoPageFactory() {
  return <TodoPage useTodos={useTodos()} />;
}
