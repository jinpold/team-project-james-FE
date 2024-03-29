import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IArticles } from "./articles.model";
import { initialState } from "../articles/article.init";
import { getAllArticles } from "./article.service";
import { Pending } from "@mui/icons-material";

const articleThunks = [getAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handlePending = (state:any) => {
}

const handleFulfilled = (state:any, {payload}:any)=>{
    console.log('---------------- conclusion ----------------')
    console.log(JSON.stringify(payload))
}

const handleRejected = (state:any) => {
}


export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers:builder =>{
        const {pending, rejected} = status;

        builder
        .addCase(getAllArticles.fulfilled, handleFulfilled)
    }
})

export const {} = articleSlice.actions

export default articleSlice.reducer;