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

    throw new Error('Não existe uma tarefa com este id.');
  }
}
