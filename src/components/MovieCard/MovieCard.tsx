import imgUrl from '../../assets/images/Pulp-Fiction1.png';
import { ContextMenu } from '../ContextMenu/ContextMenu';

type MovieListProps = {
  id?: string;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
};

export function MovieCard({ id, onDeleteClick, onEditClick }: MovieListProps) {
  return (
    <div className="max-w-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="absolute p-5">
        <ContextMenu id={id} onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
      </div>
      <img src={imgUrl} alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-200 dark:text-white">Pulp Fiction</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Action & Adventure</p>
      </div>
    </div>
  );
}
