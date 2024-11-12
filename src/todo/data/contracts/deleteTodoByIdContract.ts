import type { Todo } from '../../domain/entities/todo';

export interface IDeleteTodoById {
  deleteTodoById(id: string): Todo[];
}
