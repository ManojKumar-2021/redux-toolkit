import { configureStore } from "@reduxjs/toolkit";
import { customeReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    custome: customeReducer
  }
});

export default store;
