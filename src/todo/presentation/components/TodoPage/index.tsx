import { useEffect, useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

import { Todo } from '../../../domain/entities/todo';

export function TodoPage() {
  const { todos, isLoading, removeTodo } = useTodos();

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  if (isLoading) {
    return <p>carregando...</p>;
  }

  const filterItems = (searchTerm: string) => {
    const filtered = todos.filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredTodos(filtered);
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <>
      <TodoSearch onChangeCallback={filterItems} />

      <div className="flex flex-col gap-8">
        {filteredTodos.map((todo) => {
          return (
            <section className="flex items-center justify-center " key={todo.id}>
              <TodoCard removeItem={removeTodo} todo={todo} />
            </section>
          );
        })}
      </div>
    </>
  );
}

export function TodoPageFactory() {
  return <TodoPage />;
}
