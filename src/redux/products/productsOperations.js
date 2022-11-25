import { slimMomAxios } from 'redux/slimMomAxios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const selectProduct = createAsyncThunk(
  'products/selectProduct',
  async (search, { rejectWithValue }) => {
    try {
      const response = await slimMomAxios.get('/product', {
        params: {
          search,
        },
      });
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await slimMomAxios.post('/day', productData);
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
