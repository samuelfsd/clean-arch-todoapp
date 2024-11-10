import type { IGetTodosContract } from '../data/contracts/getTodosContract';
import { GetTodosService } from '../data/services/getTodosService';

export type MakeTodoProvider = IGetTodosContract;

export function makeTodo(): MakeTodoProvider {
  const getTodos = new GetTodosService();

  return {
    getTodos() {
      return getTodos.getTodos();
    },
  };
}
