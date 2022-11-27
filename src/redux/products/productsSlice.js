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
  dayId: [],
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
    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.selectedProduct = action.payload;
    });
    builder.addCase(selectProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.selectedProduct = initialState.selectedProduct;
    });
    builder.addCase(addProduct.pending, handlePending);
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.productsHistory = action.payload.day;
    });
    builder.addCase(addProduct.rejected, handleRejected);
    builder.addCase(getInfoForDay.pending, state => {
      state.isLoading = true;
      state.productsByDate = initialState.productsByDate;
    });
    builder.addCase(getInfoForDay.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      state.dayId = action.payload.id;
      state.productsHistory = action.payload;
      state.daySummary = action.payload.daySummary;
    });
    builder.addCase(getInfoForDay.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.productsByDate = initialState.productsByDate;
    });
    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(deleteProduct.rejected, handleRejected);
  },
});

export const { getCurrentDate } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
