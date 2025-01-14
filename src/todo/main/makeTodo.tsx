import { IAddTodoContract } from '../data/contracts/addTodoContract';
import { ICompleteTodoContract } from '../data/contracts/completeTodoContract';
import type { IDeleteTodoById } from '../data/contracts/deleteTodoByIdContract';
import type { IGetTodosContract } from '../data/contracts/getTodosContract';
import { AddTodoService } from '../data/services/addTodoService';
import { CompleteTodoService } from '../data/services/completeTodoService';
import { DeleteTodoByIdService } from '../data/services/deleteTodoByIdService';
import { GetTodosService } from '../data/services/getTodosService';

export type MakeTodoProvider = IGetTodosContract & IDeleteTodoById & IAddTodoContract & ICompleteTodoContract;

export function makeTodo(): MakeTodoProvider {
  const getTodos = new GetTodosService();
  const deleteTodoById = new DeleteTodoByIdService();
  const addTodo = new AddTodoService();
  const completeTodo = new CompleteTodoService();

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
    completeTodo(id) {
      return completeTodo.completeTodo(id);
    },
  };
}
