import { useRouteError } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';

type ErrorResponse = {
  data: unknown;
  status: number;
  statusText: string;
  message?: string;
};

export function RouterError() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="w-full bg-zinc-800">
      <Header>
        <MainMenu />
      </Header>
      <div className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-white">
              <i>{error.statusText || error.message}</i>
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Oops!</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              Sorry, an unexpected error has occurred.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
