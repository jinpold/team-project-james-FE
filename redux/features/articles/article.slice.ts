import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from './article.model';
import { initialState } from './article.init';
import { fetchAllArticles } from './article.service';

const articleThunks = [fetchAllArticles]
// fetchAllArticles <- Thuck에 있음 (서비스에서 받을때 담아놓음)

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => { 
    // payload = 액션 대표 객체 : payload는 택배 같은 의미 (자바 다녀옴)
    console.log('------------------ conclusion ---------------')
    state.array = payload // 자바 -> 맵을 리스트로 던진걸  array로 받고  payload로 할당
    console.log(state.array)

}

const handlePending = (state: any) => {
  //보류
}

const handleRejected = (state: any) => {
  //거부
}

export const articleSlice = createSlice({
    name: "articles", // Slice의 이름 (상태는 스토어 하나라서 이름 부여하면서 나눠줌)
    initialState, // 속성
    reducers: {}, // reducer{ } -> { } 내부의 상태가 리덕스에 있다.
    extraReducers: builder => {  // extraReducers 외부에서 상태가 바뀌는 것 
        const {pending, rejected} = status;

        builder 
        .addCase(fetchAllArticles.fulfilled, handleFulfilled) 
        // addcase = 자바의 swich case  조건 중 하나를 거르고 , fulfilled = 성공을 의미 -> 실행된다. 
        // fetchAllArticles <- Thuck에 있음 (서비스에서 받을때 담아놓음)

    }
})
export const getAllArticles = (state: any) => { // get 결과를 읽어오는 것 
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array.result))
    return state.article.array.result; 
    // state.article  = 상태.키값 (reduce.ts에 있음 / 55번 리턴으로 리듀서에서 키 값을 불러온다.)
    // 20번이랑 비교했을때 article이 가운데 추가 되는데, 그 이유는 저장공간에서 불러올때  article이라는 키값으로 생성되기 때문이다. 
}

export const {} = articleSlice.actions

export default articleSlice.reducer; //  reducer로 리턴한다. () reducer = 여러갈래의 데이터를 하나로 모아 주는것. )