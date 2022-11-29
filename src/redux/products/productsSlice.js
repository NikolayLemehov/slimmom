import { createSlice } from '@reduxjs/toolkit';
import {
  selectProduct,
  addProduct,
  getInfoForDay,
  deleteProduct,
} from './productsOperations';

const initialState = {
  selectedProduct: [],
  productsHistory: [],
  productsByDate: [],
  currentDate: null,
  isLoading: false,
  error: null,
  shallGetInfoOfDay: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.shallGetInfoOfDay = false;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.shallGetInfoOfDay = false;
  state.error = action.payload;
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
    builder.addCase(selectProduct.pending, state => {
      state.isLoading = false;
    });
    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shallGetInfoOfDay = false;
      state.error = null;
      state.selectedProduct = action.payload;
    });
    builder.addCase(selectProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.shallGetInfoOfDay = false;
      state.error = action.payload;
      state.selectedProduct = initialState.selectedProduct;
    });
    builder.addCase(addProduct.pending, handlePending);
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shallGetInfoOfDay = true;
      state.error = null;
    });
    builder.addCase(addProduct.rejected, handleRejected);
    builder.addCase(getInfoForDay.pending, state => {
      state.isLoading = true;
      state.shallGetInfoOfDay = false;
      state.productsByDate = initialState.productsByDate;
    });
    builder.addCase(getInfoForDay.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shallGetInfoOfDay = false;
      state.error = null;

      state.productsByDate = action.payload;
      state.daySummary = action.payload.daySummary;
    });
    builder.addCase(getInfoForDay.rejected, (state, action) => {
      state.isLoading = false;
      state.shallGetInfoOfDay = false;
      state.error = action.payload;
      state.productsByDate = initialState.productsByDate;
    });
    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shallGetInfoOfDay = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.rejected, handleRejected);
  },
});

export const { getCurrentDate } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
