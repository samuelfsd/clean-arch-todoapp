import { useCallback, useEffect, useState } from 'react';
import type { Todo } from '../../domain/entities/todo';
import type { MakeTodoProvider } from '../../main/makeTodo';

export interface IUseTodosState {
  todos: Todo[];
  isLoading: boolean;
}

export interface IUseTodoProps {
  makeTodo: MakeTodoProvider;
}

export function useTodos({ makeTodo }: IUseTodoProps) {
  const { getTodos, deleteTodoById } = makeTodo;

  const [state, setState] = useState<IUseTodosState>({
    todos: [],
    isLoading: false,
  });

  const fetchTodos = useCallback(() => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const todos = getTodos();
    setState({
      todos,
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

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos: state.todos,
    isLoading: state.isLoading,
    removeTodo,
  };
}
