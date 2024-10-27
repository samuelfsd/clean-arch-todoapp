import { todos } from '../../../data/base';
import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

import styles from './styles.module.css';

export function TodoPage() {
  return (
    <>
      <TodoSearch />

      {todos.map((todo) => {
        return (
          <section className={styles.section} key={todo.id}>
            <TodoCard title={todo.title} />
          </section>
        );
      })}
    </>
  );
}
