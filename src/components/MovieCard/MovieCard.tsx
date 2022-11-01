import imgUrl from '../../assets/images/Pulp-Fiction1.png';

export function MovieCard() {
  return (
    <div className="max-w-sm dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img src={imgUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-200 dark:text-white">Pulp Fiction</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Action & Adventure</p>
      </div>
    </div>
  );
}
