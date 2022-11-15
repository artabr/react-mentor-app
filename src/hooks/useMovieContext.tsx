import { createContext, useContext, useMemo, useState } from 'react';

type MovieContextType = {
  selectedMovieId: string;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string>>;
};

type MovieProviderProps = {
  children: React.ReactNode;
};

const MovieContext = createContext<MovieContextType | null>(null);

export function MovieContextProvider(props: MovieProviderProps) {
  const [selectedMovieId, setSelectedMovieId] = useState('');

  const value = useMemo<MovieContextType>(
    () => ({
      selectedMovieId,
      setSelectedMovieId,
    }),
    [selectedMovieId],
  );

  return <MovieContext.Provider value={value}>{props.children}</MovieContext.Provider>;
}

export function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieContextProvider');
  }

  return context;
}
