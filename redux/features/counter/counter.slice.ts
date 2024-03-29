//"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./counter.init";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleClickPlus: (state) => {
      state.value += 1;
    },
    handleClickMinus: (state) => {
      state.value -= 1;
    },

  },
});

export const { handleClickPlus, handleClickMinus } = counterSlice.actions

export const getCount = (state: any) => state.count.value;

export default counterSlice.reducer;