import { TodoCard } from '../TodoCard';
import { TodoSearch } from '../TodoSearch';

export function TodoPage() {
  return (
    <>
      <TodoSearch />
      <TodoCard title="Ler um livro" />
    </>
  );
}
