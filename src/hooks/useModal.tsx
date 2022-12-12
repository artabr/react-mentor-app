import { ReactNode, useState } from 'react';

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>('');
  const [modalTitle, setModalTitle] = useState<string>('');

  const handleModal = (content: ReactNode = '', title = '') => {
    setModalOpen(!isModalOpen);
    if (content) {
      setModalContent(content);
    }
    if (title) {
      setModalTitle(title);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return { isModalOpen, handleModal, closeModal, modalTitle, modalContent };
};
