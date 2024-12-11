import { Todo } from '../../domain/entities/todo';

export type AddTodo = Omit<Todo, 'id'>;

export interface IAddTodoContract {
  addTodo(payload: AddTodo): Todo[];
}
