import { Todo } from '../../domain/entities/todo';
import { Progress } from '../../domain/enums/progressEnum';
import { todos } from '../base';
import { IAddTodoContract } from '../contracts/addTodoContract';

export class AddTodoService implements IAddTodoContract {
  addTodo(payload: { progress: Progress; title: string }) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: payload.title,
      progress: payload.progress,
    };

    todos.push(newTodo);

    return todos;
  }
}
