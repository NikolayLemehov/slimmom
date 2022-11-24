import storage from 'redux-persist/lib/storage';
import {createSlice} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import dailyOperations from "./dailyOperations";
import {dailyRate} from "./dailtyRateOperations";

const initialState = {
  data: null,
}

export const dailyRateSlice = createSlice({
  name: 'rate',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(dailyRate.id.fulfilled, (state, {payload}) => {
        state.data = payload;
      })
      .addCase(dailyRate.common.fulfilled, (state, {payload}) => {
        state.data = payload;
      })
  }
})

const persistConfig = {
  key: 'watermelon/slimMom/dailyRate',
  storage,
  // whitelist: ['token'],
}

export const persistedDailyRateReducer = persistReducer(persistConfig, dailyRateSlice.reducer)
