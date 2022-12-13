import { useSearchParams } from 'react-router-dom';

type UseSearchParamsState = readonly [
  searchParamsState: string,
  setSearchParamsState: (newState: (prevState: string | null) => string) => void,
];

export function useSearchParamsState(searchParamName: string): UseSearchParamsState {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = acquiredSearchParam ?? '';

  const setSearchParamsState = (newState: (prevState: string | null) => string) => {
    setSearchParams((prev) => ({
      ...[...searchParams.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
      [searchParamName]: newState(prev.get(searchParamName)),
    }));
  };
  return [searchParamsState, setSearchParamsState];
}
