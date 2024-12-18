import { useCallback, useEffect, useState } from 'react';
import type { Todo } from '../../domain/entities/todo';
import { makeTodo } from '../../main/makeTodo';
import { AddTodo } from '../../data/contracts/addTodoContract';

export interface IUseTodosState {
  todos: Todo[];
  search: string;
  isLoading: boolean;
}

export function useTodos() {
  const { getTodos, deleteTodoById, addTodo: addTodos } = makeTodo();

  const [state, setState] = useState<IUseTodosState>({
    todos: [],
    search: '', 
    isLoading: false,
  });

  const fetchTodos = useCallback(() => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const todos = getTodos();
    setState({
      todos,
      search: '', 
      isLoading: false,
    });
  }, [getTodos]);

  const removeTodo = useCallback(
    (id: string) => {
      setState((prev) => ({ ...prev, isLoading: true }));
      const todos = deleteTodoById(id);
      setState((prevState) => ({
        ...prevState,
        todos,
        isLoading: false,
      }));
    },
    [deleteTodoById],
  );

  const addTodo = useCallback(
    (todo: AddTodo) => {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      const todos = addTodos(todo);
      setState((prevState) => ({
        ...prevState,
        todos,
        isLoading: false,
      }));
    },
    [addTodos],
  );

  useEffect(() => {
    if (!state.todos.length) {
      fetchTodos();
    }
  }, [fetchTodos]);

  return {
    todos: state.todos,
    isLoading: state.isLoading,
    removeTodo,
    addTodo,
  };
}
