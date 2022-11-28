import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { username: null, email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  loading: {
    register: false,
    logIn: false,
    registration: false,
    refresh: false,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, state => {
        state.loading.registration = true;
      })
      .addCase(authOperations.register.rejected, state => {
        state.loading.registration = false;
      })
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.user.username = payload['user']['username'];
        state.user.email = payload['user']['email'];
        state.user.id = payload['user']['id'];

        state.accessToken = payload['accessToken'];
        state.refreshToken = payload['refreshToken'];
        state.sid = payload['sid'];

        state.isLoggedIn = true;
        state.loading.registration = false;
      })

      .addCase(authOperations.logIn.pending, state => {
        state.loading.logIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user.username = payload['user']['username'];
        state.user.email = payload['user']['email'];
        state.user.id = payload['user']['id'];

        state.accessToken = payload['accessToken'];
        state.refreshToken = payload['refreshToken'];
        state.sid = payload['sid'];

        state.isLoggedIn = true;
        state.loading.logIn = false;
      })
      .addCase(authOperations.logIn.rejected, state => {
        state.loading.logIn = false;
      })

      .addCase(authOperations.logOut.pending, state => {
        state.loading.logOut = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user.username = initialState.user.username;
        state.user.email = initialState.user.email;
        state.user.id = initialState.user.id;

        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.sid = initialState.sid;

        state.isLoggedIn = initialState.isLoggedIn;
        state.loading.logOut = false;
      })
      .addCase(authOperations.logOut.rejected, state => {
        state.loading.logOut = false;
      })

      .addCase(authOperations.refresh.pending, state => {
        state.loading.refresh = true;
        state.accessToken = null;
      })
      .addCase(authOperations.refresh.fulfilled, (state, { payload }) => {
        state.accessToken = payload.refreshData['newAccessToken'];
        state.refreshToken = payload.refreshData['newRefreshToken'];
        state.sid = payload.refreshData['sid'];

        state.user.username = payload.userData['username'];
        state.user.email = payload.userData['email'];
        state.user.id = payload.userData['id'];

        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.loading.refresh = false;
      })
      .addCase(authOperations.refresh.rejected, state => {
        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.sid = initialState.sid;

        state.user.username = initialState.user.username;
        state.user.email = initialState.user.email;
        state.user.id = initialState.user.id;

        state.isLoggedIn = initialState.isLoggedIn;
        state.loading.refresh = false;
      });
  },
});

const persistConfig = {
  key: 'watermelon/slimMom',
  storage,
  // whitelist: ['token'],
  blacklist: ['loading'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
