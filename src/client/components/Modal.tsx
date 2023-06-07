import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Button from './Button';

const modalRoot = document.getElementById('modal-root');

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ children, onClose, onConfirm }: ModalProps) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild<HTMLDivElement>(el);
    () => modalRoot.removeChild<HTMLDivElement>(el);
  }, []);

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-primary">Delete Note</h2>
        <p className="mb-8 text-lg text-secondary">Are you sure you want to delete this note?</p>

        <div className="flex justify-between">
          <Button color="primary" onClick={onConfirm}>
            Confirm
          </Button>
          <Button color="ghost" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>,
    el
  );
};

export default Modal;
