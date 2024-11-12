import type { Todo } from '../../domain/entities/todo';
import { todos } from '../base';
import type { IDeleteTodoById } from '../contracts/deleteTodoByIdContract';

export class DeleteTodoByIdService implements IDeleteTodoById {
  deleteTodoById(id: string): Todo[] {
    const findTodoToDelete = todos.findIndex((todo) => todo.id === id);

    if (findTodoToDelete !== -1) {
      todos.splice(findTodoToDelete, 1);
      return todos;
    }
    //@TODO: adicionar uma tratativa de erro melhor
    throw new Error('Erro ao procurar tarefa.');
  }
}
