import type { IDeleteTodoById } from '../data/contracts/deleteTodoByIdContract';
import type { IGetTodosContract } from '../data/contracts/getTodosContract';
import { DeleteTodoByIdService } from '../data/services/deleteTodoByIdService';
import { GetTodosService } from '../data/services/getTodosService';

export type MakeTodoProvider = IGetTodosContract & IDeleteTodoById;

export function makeTodo(): MakeTodoProvider {
  const getTodos = new GetTodosService();

  const deleteTodoById = new DeleteTodoByIdService();

  return {
    getTodos() {
      return getTodos.getTodos();
    },
    deleteTodoById(id) {
      return deleteTodoById.deleteTodoById(id);
    },
  };
}
