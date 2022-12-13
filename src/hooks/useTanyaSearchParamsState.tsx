import { useSearchParams } from 'react-router-dom';

type SearchParamsStates = {
  [key: string]: string;
};

type UseSearchParamsState = readonly [
  searchParamsStates: SearchParamsStates,
  setSearchParamsState: (newState: (prevState: SearchParamsStates | null) => SearchParamsStates) => void,
];

const reduceParamsStates = (searchParamNames: string[], searchParams: URLSearchParams): SearchParamsStates =>
  searchParamNames.reduce((obj, key) => ({ ...obj, [key]: searchParams.get(key) }), {});

export function useTanyaSearchParamsState(searchParamNames: string[]): UseSearchParamsState {
  const [searchParams, setSearchParams] = useSearchParams();
  // получаем значения параметров по нужным нам ключам для передачи из хука
  const searchParamsStates: SearchParamsStates = reduceParamsStates(searchParamNames, searchParams);

  const setSearchParamsState = (newState: (prevState: SearchParamsStates | null) => SearchParamsStates) => {
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);
      // получаем старые значения параметров по нужным нам ключам
      const prevStates = reduceParamsStates(searchParamNames, prev);
      // передаем старые значения в колбэк на случай, если их нужно будет проверять вне хука
      // и получаем новые значения
      const newStates = newState(prevStates);
      // устанавливаем только нужные нам параметры
      Object.keys(newStates).forEach((key) => {
        newSearchParams.set(key, newStates[key]);
      });
      // возвращаем все параметры
      return newSearchParams;
    });
  };
  return [searchParamsStates, setSearchParamsState];
}
