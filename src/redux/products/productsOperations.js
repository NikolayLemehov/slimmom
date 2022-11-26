import { slimMomAxios } from 'redux/slimMomAxios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const selectProduct = createAsyncThunk(
  'products/selectProduct',
  async (search, { rejectWithValue }) => {
    if (!search) return [];
    console.log(search);

    try {
      const { data } = await slimMomAxios.get('/product', {
        params: {
          search,
        },
      });
      return data;
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

export const getInfoForDay = createAsyncThunk(
  'products/getInfoForDay',
  async (date, { rejectWithValue }) => {
    try {
      const responce = await slimMomAxios.post('/day/info', date);
      console.log(responce);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
