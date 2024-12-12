import { useEffect, useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

import styles from './styles.module.css';
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

      {filteredTodos.map((todo) => {
        return (
          <section className={styles.section} key={todo.id}>
            <TodoCard removeItem={removeTodo} todo={todo} />
          </section>
        );
      })}
    </>
  );
}

export function TodoPageFactory() {
  return <TodoPage />;
}
