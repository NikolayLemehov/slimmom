import {createAsyncThunk} from "@reduxjs/toolkit";
import {authSelectors} from "../auth/authSelectors";
import {slimMomAxios, token} from "../slimMomAxios";

const rateId = createAsyncThunk('/daily-rate', async  (id, thunkAPI)  => {
  // const accessToken = authSelectors.refreshToken(thunkAPI.getState());
  try {
    const {data} = await slimMomAxios.post(`/daily-rate/${id}`)
    return data
  } catch (e) {
    console.log(e)
  }
})

const rate = createAsyncThunk('/daily-rate', async  (id, thunkAPI)  => {
  // const accessToken = authSelectors.refreshToken(thunkAPI.getState());
  try {
    const {data} = await slimMomAxios.post(`/daily-rate/`)
    return data
  } catch (e) {
    console.log(e)
  }
})

export const dailyRate = {
  id: rateId,
  common: rate
}

