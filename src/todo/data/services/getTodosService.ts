import type { IGetTodosContract } from '../contracts/getTodosContract';

import { todos } from '../base';

export class GetTodosService implements IGetTodosContract {
  getTodos() {
    return todos;
  }
}
