import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category-slice";
import userReducer from "./user-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["user/setCurrentUser"],
      },
    }),
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});

export default store;
