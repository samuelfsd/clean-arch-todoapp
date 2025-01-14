import { useCallback, useEffect, useState } from 'react';

import type { Todo } from '../../domain/entities/todo';

import { makeTodo } from '../../main/makeTodo';
import { AddTodo } from '../../data/contracts/addTodoContract';

export interface IUseTodosState {
  todos: Todo[];
  search: string;
  isLoading: boolean;
  isInitialized: boolean;
}

export function useTodos() {
  const { getTodos, deleteTodoById, addTodo: addTodos, completeTodo: complete } = makeTodo();

  const [state, setState] = useState<IUseTodosState>({
    todos: [],
    search: '',
    isLoading: false,
    isInitialized: false,
  });

  const listTodos = useCallback(() => {
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

  const completeTodo = useCallback(
    (id: string) => {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      const todos = complete(id);
      setState((prevState) => ({
        ...prevState,
        todos,
        isLoading: false,
      }));
    },
    [complete],
  );

  const setSearch = useCallback((search: string) => {
    setState((prevState) => ({ ...prevState, search: search }));
  }, []);

  const filteredTodos = state.todos.filter((todo) => todo.title.toLowerCase().includes(state.search.toLowerCase()));

  useEffect(() => {
    if (!state.isInitialized) {
      listTodos();
      setState((prevState) => ({ ...prevState, isInitialized: true }));
    }
  }, [state.isInitialized, listTodos]);

  return {
    todos: filteredTodos,
    isLoading: state.isLoading,
    search: state.search,

    // functions
    listTodos,
    removeTodo,
    addTodo,
    setSearch,
    completeTodo,
  };
}
