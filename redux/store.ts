import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";

const store = configureStore(
    {
      reducer: {
        students: studentReducer
      }
    }
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;