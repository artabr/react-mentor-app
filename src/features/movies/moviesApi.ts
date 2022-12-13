import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiMovie, Movie } from '../../types/types';

type GetMoviesQueryArgs = {
  search: string;
  filter: string[];
};

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://movie-api-aokc.onrender.com/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], GetMoviesQueryArgs>({
      query: ({ search, filter }: GetMoviesQueryArgs) => ({
        url: `movies?search=${search}&searchBy=title&filter=${filter.join(',')}&limit=12`,
      }),
      transformResponse: (response: { data: ApiMovie[] }) =>
        response.data.map((responseItem) => ({ ...responseItem, id: responseItem.id.toString() })),
    }),
    getMovieById: builder.query<Movie, string>({
      query: (movieId: string) => ({
        url: `/movies/${movieId}`,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
