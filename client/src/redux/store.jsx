import { configureStore } from "@reduxjs/toolkit";
 
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import loginReducer from "./loginSlice";

const persistConfig = {
  key: "userDetails",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
