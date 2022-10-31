import imgUrl from '../../assets/images/Pulp-Fiction1.png';

export function MovieCard() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img className="rounded-t-lg" src={imgUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pulp Fiction</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Action & Adventure</p>
      </div>
    </div>
  );
}
