import { IAddTodoContract } from '../data/contracts/addTodoContract';
import type { IDeleteTodoById } from '../data/contracts/deleteTodoByIdContract';
import type { IGetTodosContract } from '../data/contracts/getTodosContract';
import { AddTodoService } from '../data/services/addTodoService';
import { DeleteTodoByIdService } from '../data/services/deleteTodoByIdService';
import { GetTodosService } from '../data/services/getTodosService';

export type MakeTodoProvider = IGetTodosContract & IDeleteTodoById & IAddTodoContract;

export function makeTodo(): MakeTodoProvider {
  const getTodos = new GetTodosService();
  const deleteTodoById = new DeleteTodoByIdService();
  const addTodo = new AddTodoService();

  return {
    getTodos() {
      return getTodos.getTodos();
    },
    deleteTodoById(id) {
      return deleteTodoById.deleteTodoById(id);
    },
    addTodo(payload) {
      return addTodo.addTodo(payload);
    },
  };
}
