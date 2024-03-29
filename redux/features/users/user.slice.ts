import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./user.init";



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export const { } = userSlice.actions

export default userSlice.reducer;