import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterItem(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeFilterItem(state, action: PayloadAction<string>) {
      return state.filter((filter) => filter !== action.payload);
    },
    toggleFilterItem(state, action: PayloadAction<string | undefined>) {
      if (!action.payload) return state;
      if (state.includes(action.payload)) return state.filter((filter) => filter !== action.payload);
      return [...state, action.payload];
    },
    clearFilterItems() {
      return [];
    },
  },
});

export const { addFilterItem, removeFilterItem, clearFilterItems, toggleFilterItem } = filterSlice.actions;
export default filterSlice.reducer;
