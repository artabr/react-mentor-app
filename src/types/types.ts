export type Movie = {
  id: string;
  title: string;
  genres: string[];
  overview: string;
  runtime: number;
  poster_path: string;
  vote_average?: number;
  release_date?: string;
};
