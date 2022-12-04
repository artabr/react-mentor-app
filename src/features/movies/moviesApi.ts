import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../../types/types';

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://movie-api-aokc.onrender.com/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string[]>({
      query: (filter: string[]) => ({ url: `movies?filter=${filter.join(',')}` }),
      transformResponse: (response: { data: Movie[] }) => response.data,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
