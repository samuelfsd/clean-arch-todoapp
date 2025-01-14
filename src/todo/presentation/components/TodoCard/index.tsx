import { Check, Trash } from 'lucide-react';

import type { Todo } from '../../../domain/entities/todo';
import { toast } from 'sonner';
import { Progress } from '../../../domain/enums/progressEnum';

interface CardProps {
  todo: Todo;
  removeItem(id: string): void;
  completeTodo(id: string): void;
}

export function TodoCard({ todo, removeItem, completeTodo }: CardProps) {
  function handleRemoveItem() {
    removeItem(todo.id);
    toast.success('Tarefa removida com sucesso!');
  }

  function handleCompleteTodo() {
    completeTodo(todo.id);
    toast.success('Tarefa completada com sucesso!');
  }

  return (
    <section className="flex items-center justify-center w-full mb-4">
      <div className="flex flex-col w-80 gap-8 md:flex-row md:w-[650px] px-6 items-center md:justify-between bg-white rounded-none border-2 border-black ">
        <h3 className={`font-extrabold text-black ${todo.progress === Progress.COMPLETED ? 'line-through' : ''}`}>
          {todo.title}
        </h3>

        <div className="flex flex-col items-center justify-center gap-2 pt-2 pb-2">
          {todo.progress === Progress.IN_PROGRESS && (
            <button
              type="button"
              className="btn w-[130px] h-10 rounded-none border-2 border-black bg-green-200 self-end hover:bg-green-500 text-black font-extrabold"
              onClick={handleCompleteTodo}
            >
              <Check className="w-4 h-4" />
              Completar
            </button>
          )}
          <button
            type="button"
            className="btn w-[130px] h-10 rounded-none border-2 border-black bg-red-200 self-end hover:bg-red-500 text-black font-extrabold"
            onClick={handleRemoveItem}
          >
            <Trash className="w-4 h-4" />
            Deletar
          </button>
        </div>
      </div>
    </section>
  );
}
