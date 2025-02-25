import { Toaster } from 'sonner';
import { TodoPageFactory } from './todo/presentation/components/TodoPage';

export function App() {
  return (
    <>
      <TodoPageFactory />

      <Toaster position="top-right" richColors />
    </>
  );
}
