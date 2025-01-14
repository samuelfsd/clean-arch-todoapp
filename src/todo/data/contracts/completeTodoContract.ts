import { Todo } from '../../domain/entities/todo';

export interface ICompleteTodoContract {
  completeTodo(id: string): Todo[];
}
