import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { dailyRate, dailyRateById, userInfo } from './dailtyRateOperations';
import { getInfoForDay } from 'redux/products/productsOperations';

const initialState = {
  dailyRate: null,
  dataUser: null,
  notAllowedProducts: [],
  summaries: [],
  currentDate: null,
  loading: false,
  error: '',
};

const handlePending = state => {
  state.dailyRate = null;
  state.notAllowedProducts = [];
  state.summaries = [];
  state.loading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  reducers: {
    getDate: {
      reducer(state, action) {
        state.currentDate = action.payload;
      },
    },
    getDataUser: {
      reducer(state, action) {
        state.dataUser = action.payload;
      },
    },
  },
  extraReducers: builder => {
    // Without id user
    builder
      .addCase(dailyRate.pending, handlePending)
      .addCase(dailyRate.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(dailyRate.rejected, handleRejected);

    // With id user
    builder
      .addCase(dailyRateById.pending, handlePending)
      .addCase(dailyRateById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
        state.summaries = payload.summaries;
      })
      .addCase(dailyRateById.rejected, handleRejected);

    // get info for day
    builder.addCase(getInfoForDay.fulfilled, (state, { payload }) => {
      // If response with date
      if (
        payload.daySummary &&
        !state.summaries.some(item => item.date === payload.daySummary.date)
      ) {
        // add new info for day
        state.summaries.push(payload.daySummary);
      } else {
        // replace info for day
        state.summaries = state.summaries.map(item => {
          if (item?.date === payload?.daySummary?.date) {
            return payload.daySummary;
          }
          return item;
        });
      }

      // If response without date
      if (!payload.daySummary) {
        const newPayload = { date: state.currentDate, ...payload };

        if (!state.summaries.some(item => item.date === newPayload.date)) {
          // add new info for day
          state.summaries.push(newPayload);
        } else {
          // replace info for day
          state.summaries = state.summaries.map(item => {
            if (item?.date === newPayload.date) {
              return newPayload;
            }
            return item;
          });
        }
      }
    });

    // Get user Info
    builder
      .addCase(userInfo.pending, handlePending)
      .addCase(userInfo.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(userInfo.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'watermelon/slimMom/dailyRate',
  storage,
  whitelist: ['dailyRate', 'notAllowedProducts'],
};

export const { getDate } = dailyRateSlice.actions;
export const { getDataUser } = dailyRateSlice.actions;

export const persistedDailyRateReducer = persistReducer(
  persistConfig,
  dailyRateSlice.reducer
);
