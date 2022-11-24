import { slimMomAxios, token } from 'redux/slimMomAxios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const selectProduct = createAsyncThunk(
  'products/addProduct',
  async (search, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.accessToken;
    console.log(currentToken);
    if (!currentToken) rejectWithValue();
    token.set(currentToken);

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
