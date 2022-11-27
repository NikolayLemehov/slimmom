import { slimMomAxios } from 'redux/slimMomAxios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const selectProduct = createAsyncThunk(
  'products/selectProduct',
  async (search, { rejectWithValue }) => {
    if (!search) return [];

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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getInfoForDay = createAsyncThunk(
  'products/getInfoForDay',
  async (date, { rejectWithValue }) => {
    try {
      const response = await slimMomAxios.post('/day/info', date);
      console.log('getInfoForDay', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (idValues, { rejectWithValue }) => {
    console.log('Request Body for deleteProduct', idValues);
    try {
      const response = await slimMomAxios.delete(`/day`, { data: idValues });
      console.log('deleteProduct', response);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
