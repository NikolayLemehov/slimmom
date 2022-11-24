import { createAsyncThunk } from '@reduxjs/toolkit';
// import {authSelectors} from "../auth/authSelectors";
import { slimMomAxios } from '../slimMomAxios';

// const rateId = createAsyncThunk('/daily-rate', async  (id, thunkAPI)  => {
//   // const accessToken = authSelectors.refreshToken(thunkAPI.getState());
//   try {
//     const {data} = await slimMomAxios.post(`/daily-rate/${id}`)
//     return data
//   } catch (e) {
//     console.log(e)
//   }
// })

export const dailyRate = createAsyncThunk(
  'dailyRate/fetchData',
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const { data } = await slimMomAxios.post(`/daily-rate`, userData);
      console.log(data);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
