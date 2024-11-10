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

export function useTodos(params: MakeTodoProvider) {
  const { getTodos } = params;

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

  const removeTodo = useCallback((id: string) => {
    setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos: state.todos,
    isLoading: state.isLoading,
    removeTodo,
  };
}
