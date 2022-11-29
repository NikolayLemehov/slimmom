import { slimMomAxios } from 'redux/slimMomAxios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

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
    } catch (e) {
      Notify.failure('The list of products is empty!');
      return rejectWithValue(e.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await slimMomAxios.post('/day', productData);
      return response.data;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);

export const getInfoForDay = createAsyncThunk(
  'products/getInfoForDay',
  async (date, { rejectWithValue }) => {
    try {
      const response = await slimMomAxios.post('/day/info', date);
      return response.data;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (idValues, { rejectWithValue }) => {
    try {
      const { data } = await slimMomAxios.delete(`/day`, { data: idValues });
      return data;
    } catch (e) {
      Notify.failure(e.message);
      return rejectWithValue(e.message);
    }
  }
);
