import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ChangeEvent, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Progress } from '../../../domain/enums/progressEnum';

import styles from './styles.module.css';

import { AddTodo } from '../../../data/contracts/addTodoContract';

interface TodoSearchProps {
  search: string;
  setSearch: (search: string) => void;
  addTodo: (todo: AddTodo) => void;
}
interface TodoSearchState {
  name: string;
  checked: boolean;
  data: AddTodo;
}

export function TodoSearch({ addTodo, search, setSearch }: TodoSearchProps) {
  const [state, setState] = useState<TodoSearchState>({
    name: '',
    checked: false,
    data: { title: '', progress: Progress.IN_PROGRESS },
  });

  const handleChangeCheckedValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, checked: e.target.checked }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleAddTodo = () => {
    const todo = {
      title: state.name,
      progress: state.checked ? Progress.COMPLETED : Progress.IN_PROGRESS,
    };
    addTodo(todo);
  };

  return (
    <div className="flex items-center justify-center my-16 gap-6">
      <div className="w-full max-w-sm min-w-[130px]">
        <div className="relative">
          <div className="absolute left-1 top-1 rounded p-1.5 border border-transparent text-center ">
            <MagnifyingGlassIcon height="16" width="16" />
          </div>

          <input
            className="w-full pl-8 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-400 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Pesquise aqui…"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button" className={`${styles.Button} violet`}>
            Adicionar
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.Overlay} />
          <Dialog.Content className={styles.Content}>
            <Dialog.Title className={styles.Title}>Adicionar tarefa!</Dialog.Title>
            <Dialog.Description className={styles.Description}>
              Crie aqui uma nova tarefa para suas atividades!
            </Dialog.Description>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="title">
                Nome
              </label>
              <input
                className={styles.Input}
                id="name"
                value={state.name}
                onChange={(e) => setState((prevState) => ({ ...prevState, name: e.target.value }))}
              />
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="title">
                Marcar como feito
              </label>
              <input type="checkbox" checked={state.checked} onChange={handleChangeCheckedValue} />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button type="button" className={`${styles.Button} green`} onClick={handleAddTodo}>
                  Adicionar tarefa
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button type="button" className={styles.IconButton} aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
