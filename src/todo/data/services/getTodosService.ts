import type { Todo } from '../../domain/entities/todo';
import type { IGetTodosContract } from '../contracts/getTodosContract';

import { todos } from '../base';

export class GetTodosService implements IGetTodosContract {
  getTodos(): Todo[] {
    return todos;
  }
}
