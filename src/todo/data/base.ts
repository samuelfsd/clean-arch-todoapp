import type { Todo } from '../domain/entities/todo';
import { Progress } from '../domain/enums/progressEnum';

export const todos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Fazer café',
    progress: Progress.IN_PROGRESS,
  },
  {
    id: crypto.randomUUID(),
    title: 'Estudar TS',
    progress: Progress.COMPLETED,
  },
  {
    id: crypto.randomUUID(),
    title: 'Estudar Clean Arch',
    progress: Progress.IN_PROGRESS,
  },
];
