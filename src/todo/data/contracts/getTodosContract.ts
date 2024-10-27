import type { Todo } from '../../domain/entities/todo';

export interface IGetTodosContract {
  getTodos(): Todo[];
}
