import { createAsyncThunk } from '@reduxjs/toolkit';
// import {authSelectors} from "../auth/authSelectors";
import { slimMomAxios } from '../slimMomAxios';

export const dailyRateById = createAsyncThunk(
  'dailyRateById/fetchData',
  async ({ userId, dataUser }, thunkAPI) => {
    // const accessToken = authSelectors.refreshToken(thunkAPI.getState());
    try {
      const { data } = await slimMomAxios.post(
        `/daily-rate/${userId}`,
        dataUser
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const dailyRate = createAsyncThunk(
  'dailyRate/fetchData',
  async (userData, thunkAPI) => {
    try {
      const { data } = await slimMomAxios.post(`/daily-rate`, userData);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
