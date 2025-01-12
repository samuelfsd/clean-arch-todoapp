import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export function Modal({ children, open, onClose }: ModalProps) {
  return (
    <dialog className={`modal ${open ? 'modal-open' : ''}`}>
      <div className="modal-box  bg-amber-50 rounded-none border-2 border-black">
        <form method="dialog">
          <button
            onClick={onClose}
            type="button"
            className="btn btn-sm btn-box rounded-none border-2 hover:border-black btn-ghost absolute right-2 top-2 p-2"
          >
            <X className="w-4 h-4 rounded-none text-black" />
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
}
