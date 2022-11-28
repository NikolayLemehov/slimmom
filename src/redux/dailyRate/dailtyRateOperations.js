import { createAsyncThunk } from '@reduxjs/toolkit';
import { slimMomAxios } from '../slimMomAxios';
import {Notify} from "notiflix";

export const dailyRateById = createAsyncThunk(
  'dailyRateById/fetchData',
  async ({ userId, dataUser }, thunkAPI) => {
    try {
      const { data } = await slimMomAxios.post(
        `/daily-rate/${userId}`,
        dataUser
      );
      return data;
    } catch (e) {
      Notify.failure(e.message);
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
      Notify.failure(e.message);
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Get User Info
export const userInfo = createAsyncThunk(
  'UserInfo/fetchData',
  async (_, thunkAPI) => {
    try {
      const { data } = await slimMomAxios.post(`/user`);

      return data;
    } catch (e) {
      Notify.failure(e.message);
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
