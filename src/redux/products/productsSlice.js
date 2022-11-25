import { createSlice } from '@reduxjs/toolkit';
import { selectProduct } from './productsOperations';
const initialState = {
  products: [],
  currentDate: null,
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getCurrentDate: {
      reducer(state, action) {
        state.currentDate = action.payload;
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    });
  },
});

export const { getCurrentDate } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
