import ReactDOM from 'react-dom';
import { ReactNode } from 'react';
import { useModalContext } from '../../hooks/useModalContext';

type ModalComponentProps = {
  content: ReactNode;
  title: string;
  onCloseClick: () => void;
};

function ModalComponent({ content, title, onCloseClick }: ModalComponentProps) {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-sm md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full max-w-2xl p-4 md:h-auto">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-start justify-between rounded-t p-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={onCloseClick}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}

export function Modal() {
  const { closeModal, modalContent, modalTitle, isModalOpen } = useModalContext();

  if (isModalOpen)
    return ReactDOM.createPortal(
      <ModalComponent content={modalContent} title={modalTitle} onCloseClick={closeModal} />,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('#modal-root')!,
    );
  return null;
}
