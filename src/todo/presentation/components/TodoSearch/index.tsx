import { ChangeEvent, useState } from 'react';

import { Progress } from '../../../domain/enums/progressEnum';

import { AddTodo } from '../../../data/contracts/addTodoContract';
import { useTodos } from '../../hooks/useTodos';
import { Search } from 'lucide-react';
import { Modal } from '../../../../core/presentation/components/modal';
import { toast } from 'sonner';

interface TodoSearchProps {
  useTodos: ReturnType<typeof useTodos>;
}
interface TodoSearchState {
  name: string;
  checked: boolean;
  data: AddTodo;
  open: boolean;
}

export function TodoSearch({ useTodos }: TodoSearchProps) {
  const { search, setSearch, addTodo } = useTodos;

  const [state, setState] = useState<TodoSearchState>({
    name: '',
    checked: false,
    data: { title: '', progress: Progress.IN_PROGRESS },
    open: false,
  });

  const handleChangeCheckedValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, checked: e.target.checked }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddTodo = () => {
    const todo = {
      title: state.name,
      progress: state.checked ? Progress.COMPLETED : Progress.IN_PROGRESS,
    };

    addTodo(todo);
    setState({
      open: false,
      name: '',
      checked: false,
      data: { title: '', progress: Progress.IN_PROGRESS },
    });
    toast.success('Tarefa adicionada com sucesso!');
  };

  const handleCloseModal = () => {
    setState({
      open: false,
      name: '',
      checked: false,
      data: { title: '', progress: Progress.IN_PROGRESS },
    });
  };

  return (
    <div className="flex flex-col items-center md:justify-center md:flex-row my-16 gap-6">
      <div className="px-4 w-full md:w-[700px]">
        <div className="relative">
          <div className="absolute left-1 top-2.5 rounded p-1.5 border border-transparent text-center ">
            <Search className="w-4 h-4 text-black" />
          </div>

          <input
            className="w-full pl-8 pr-10 py-2 rounded-none bg-transparent bg-white h-12 border-2 ring-offset-background placeholder:text-black text-black text-md border-black transition duration-300 ease focus:outline-none focus:border-amber-400 hover:border-amber-300 shadow-sm "
            placeholder="Pesquise aqui…"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="mr-4 ml-auto md:ml-0 md:mr-0">
        <button
          type="button"
          className="btn md:w-[130px] rounded-none border-2 border-black bg-white hover:bg-zinc-100 text-black font-extrabold"
          onClick={() => setState((prevState) => ({ ...prevState, open: true }))}
        >
          Criar atividade!
        </button>

        <Modal open={state.open} onClose={handleCloseModal}>
          <form className="flex flex-col gap-4 pt-8">
            <div className="flex items-center gap-4">
              <label className="font-extrabold text-black" htmlFor="title">
                Nome
              </label>

              <input
                id="name"
                value={state.name}
                className="w-64 pl-2 rounded-none bg-transparent bg-white h-10 border-2 ring-offset-background placeholder:text-black text-black text-md border-black transition duration-300 ease focus:outline-none focus:border-amber-400 hover:border-amber-300 shadow-sm "
                placeholder="Informe o nome da tarefa."
                onChange={(e) => setState((prevState) => ({ ...prevState, name: e.target.value }))}
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="font-extrabold text-black" htmlFor="title">
                Marcar como feito
              </label>
              <input
                type="checkbox"
                className="checkbox border-2 border-black rounded-none bg-white"
                checked={state.checked}
                onChange={handleChangeCheckedValue}
              />
            </div>

            <button
              type="button"
              disabled={state.name === ''}
              className="btn rounded-none border-2 font-extrabold border-black bg-white self-end hover:bg-zinc-50 text-black  disabled:bg-gray-300 disabled:text-zinc-400"
              onClick={handleAddTodo}
            >
              Adicionar tarefa
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}
