import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import categoryReducer from "./category-slice";
import userReducer from "./user-slice";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "user/setCurrentUser",
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredActionPaths: ["payload.createdAt"],
        ignoredPaths: ["user.currentUser.createdAt"],
      },
    }).concat(logger),
  reducer: persistedReducer,
  devTools: false,
});

export const persistor = persistStore(store);

export default store;
