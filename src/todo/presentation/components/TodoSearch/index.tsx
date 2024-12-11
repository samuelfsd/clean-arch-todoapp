import { ChangeEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Box, Container, Flex, TextField } from '@radix-ui/themes';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Progress } from '../../../domain/enums/progressEnum';

import styles from './styles.module.css';

import { AddTodo } from '../../../data/contracts/addTodoContract';
interface TodoSearchState {
  name: string;
  search: string;
  checked: boolean;
  data: AddTodo;
}

interface TodoSearchParams {
  addTodo: (todo: AddTodo) => void;
}

export function TodoSearch({ addTodo }: TodoSearchParams) {
  const [state, setState] = useState<TodoSearchState>({
    name: '',
    search: '',
    checked: false,
    data: { title: '', progress: Progress.IN_PROGRESS },
  });

  const handleChangeCheckedValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, checked: e.target.checked }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, search: e.target.value }));
  };

  const handleAddTodo = () => {
    const todo = {
      title: state.name,
      progress: state.checked ? Progress.COMPLETED : Progress.IN_PROGRESS,
    };
    addTodo(todo);
  };

  return (
    <Container
      size={{
        initial: '3',
        md: '2',
        sm: '1',
      }}
      my="6"
    >
      <Flex align="center" justify="center" gap="3">
        <Box flexGrow="1" maxWidth="900px">
          <TextField.Root
            size={{
              initial: '3',
              md: '2',
              sm: '1',
            }}
            placeholder="Pesquise aqui…"
            value={state.search}
            onChange={handleSearchChange}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </Box>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className={`${styles.Button} violet`}>Adicionar</button>
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
                  <button className={`${styles.Button} green`} onClick={handleAddTodo}>
                    Adicionar tarefa
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button className={styles.IconButton} aria-label="Close">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Flex>
    </Container>
  );
}
