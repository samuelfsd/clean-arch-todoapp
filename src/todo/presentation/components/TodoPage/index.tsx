import { type MakeTodoProvider, makeTodo } from '../../../main/makeTodo';
import { useTodos } from '../../hooks/useTodos';
import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

import styles from './styles.module.css';

interface TodoPageProps {
  makeTodo: MakeTodoProvider;
}

export function TodoPage({ makeTodo }: TodoPageProps) {
  const { getTodos } = makeTodo;
  const { todos, isLoading, removeTodo } = useTodos({ getTodos });

  if (isLoading) {
    return <p>carregando...</p>;
  }

  return (
    <>
      <TodoSearch />

      {todos.map((todo) => {
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
  return <TodoPage makeTodo={makeTodo()} />;
}
