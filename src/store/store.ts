import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterReducer from '../features/filter/filterSlice';
import { moviesApi } from '../features/movies/moviesApi';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
