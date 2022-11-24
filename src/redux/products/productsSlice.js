import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from './productsOperations';
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    });
  },
});
