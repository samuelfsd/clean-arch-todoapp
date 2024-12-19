import { useCallback, useEffect, useMemo, useState } from 'react';
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
    setState((prev) => ({
      ...prev,
      todos,
      isLoading: false,
    }));
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

  const setSearch = useCallback((search: string) => {
    setState((prevState) => ({ ...prevState, search: search }));
  }, []);

  const filteredTodos = state.todos.filter((todo) => todo.title.toLowerCase().includes(state.search.toLowerCase()));

  useEffect(() => {
    if (state.todos.length === 0) {
      fetchTodos();
    }
  }, [fetchTodos]);

  return {
    todos: filteredTodos,
    isLoading: state.isLoading,
    search: state.search,

    // functions
    removeTodo,
    addTodo,
    setSearch,
  };
}
