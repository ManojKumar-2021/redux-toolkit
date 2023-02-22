import { createReducer } from "@reduxjs/toolkit";

const initialValue = {
  c: 0
};

export const customeReducer = createReducer(initialValue, {
  // this is the action that will be called when the action is dispatched

  // increment by 1
  increament: (state, action) => {
    state.c += 1;
  },

  // increament by payload
  increamentByValue: (state, action) => {
    state.c += action.payload;
  },

  // decrement by 1
  decrement: (state, action) => {
    state.c -= 1;
  }
});
