import { CheckIcon, TrashIcon } from '@radix-ui/react-icons';
import { Button, Strong } from '@radix-ui/themes';
import type { Todo } from '../../../domain/entities/todo';

interface CardProps {
  todo: Todo;
  removeItem(id: string): void;
}

export function TodoCard({ todo, removeItem }: CardProps) {
  function handleRemoveItem() {
    removeItem(todo.id);
  }

  return (
    <section className="flex items-center justify-center ">
      <div className="flex w-[750px] px-6 items-center justify-between bg-slate-100 rounded-lg ">
        <Strong>{todo.title}</Strong>

        <div className="flex flex-col items-center justify-center gap-2 pt-2 pb-2">
          <Button type="button" className="w-[120px]" color="green">
            <CheckIcon /> Completar
          </Button>
          <Button type="button" className="w-[120px]" onClick={handleRemoveItem} color="red">
            <TrashIcon /> Deletar
          </Button>
        </div>
      </div>
    </section>
  );
}
