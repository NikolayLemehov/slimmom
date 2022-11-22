import { configureStore } from '@reduxjs/toolkit'
// import { phonebookReducer } from './phonebook.slice';
import { persistStore } from 'redux-persist'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
// import {contactsApi} from "./contacts.service";
// import {authApi} from "./auth.service";
import {persistedAuthReducer} from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    // phonebook: phonebookReducer,
    auth: persistedAuthReducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      // .concat(contactsApi.middleware),
})

export const persistor = persistStore(store)
