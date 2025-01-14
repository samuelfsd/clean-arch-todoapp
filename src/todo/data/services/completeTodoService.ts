import { Progress } from '../../domain/enums/progressEnum';
import { todos } from '../base';
import { ICompleteTodoContract } from '../contracts/completeTodoContract';

export class CompleteTodoService implements ICompleteTodoContract {
  completeTodo(id: string) {
    const findTodoToComplete = todos.find((todo) => todo.id === id);

    if (findTodoToComplete) {
      findTodoToComplete.progress = Progress.COMPLETED;
    }

    return todos;
  }
}
