import { createContext, ReactNode, useContext, useMemo } from 'react';
import useModal from './useModal';

type ModalContextType = {
  isModalOpen: boolean;
  handleModal: (content?: ReactNode, title?: string) => void;
  closeModal: () => void;
  modalTitle: string;
  modalContent: ReactNode;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalContextProvider(props: ModalProviderProps) {
  const { isModalOpen, handleModal, closeModal, modalTitle, modalContent } = useModal();

  const value = useMemo<ModalContextType>(
    () => ({
      isModalOpen,
      handleModal,
      closeModal,
      modalTitle,
      modalContent,
    }),
    [isModalOpen, handleModal, closeModal, modalTitle, modalContent],
  );

  return <ModalContext.Provider value={value}>{props.children}</ModalContext.Provider>;
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }

  return context;
}
