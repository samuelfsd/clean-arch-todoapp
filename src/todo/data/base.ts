import type { Todo } from '../domain/entities/todo';
import { Progress } from '../domain/enums/progressEnum';

export const todos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Tarefa exemplo.',
    progress: Progress.IN_PROGRESS,
  },
];
