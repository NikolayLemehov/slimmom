import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {authSelectors} from "./authSelectors";
// import {BASE_URL} from "../utils/variables";
// import authSelectors from "./auth.selectors";

// axios.defaults.baseURL = BASE_URL
const baseURL = 'https://slimmom-backend.goit.global';

const slimMomAxios = axios.create({baseURL});

const token = {
  set(token) {
    slimMomAxios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  },
  unset() {
    this.set()
  }
}

const register = createAsyncThunk('auth/register', async credential => {
  const {email, password, username} = credential;

  try {
    await slimMomAxios.post('/auth/register', {email, password, username})
    const {data} = await slimMomAxios.post('/auth/login', {email, password})
    token.set(data.accessToken)
    return data;
  } catch (e) {
    console.log(e)
  }
})

const logIn = createAsyncThunk('auth/login', async credential => {
  const {email, password} = credential;

  try {
    const {data} = await slimMomAxios.post('/auth/login', {email, password});
    token.set(data.accessToken)
    return data;
  } catch (e) {
    console.log(e)
  }
})

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await slimMomAxios.post('/auth/logout');
    token.unset()
  } catch (e) {
    console.log(e)
  }
})

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const refreshToken = authSelectors.refreshToken(thunkAPI.getState());
  const sid = authSelectors.sid(thunkAPI.getState());

  if (refreshToken === null) return thunkAPI.rejectWithValue(`No token`);
  token.set(refreshToken);

  try {
    const {data} = await slimMomAxios.post('/auth/refresh', {sid})
    token.set(refreshToken);
    return data
  } catch (e) {
    console.log(e)
  }
})

const authOperations = {
  register,
  logIn,
  logOut,
  refresh,
}

export default authOperations;
