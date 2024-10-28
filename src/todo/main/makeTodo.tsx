import type { IGetTodosContract } from '../data/contracts/getTodosContract';
import { GetTodosService } from '../data/services/getTodosService';

export type MakeTodoType = IGetTodosContract;

export function MakeTodo(): MakeTodoType {
  const getTodos = new GetTodosService();

  return {
    getTodos() {
      return getTodos.getTodos();
    },
  };
}
