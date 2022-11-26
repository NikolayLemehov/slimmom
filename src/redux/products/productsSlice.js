import { createSlice } from '@reduxjs/toolkit';
import { selectProduct } from './productsOperations';
const initialState = {
  selectedProduct: [],
  dairyProducts: [],
  currentDate: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.selectedProduct = [];
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
    builder.addCase(selectProduct.pending, handlePending);
    builder.addCase(selectProduct.rejected, handleRejected);
    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.selectedProduct = action.payload;
    });
  },
});

export const { getCurrentDate } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
