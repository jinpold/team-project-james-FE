import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";

export const getAllArticles: any = createAsyncThunk(
    'articles/getAllArticles',
    async (page: number) => {
        console.log('getArticles page : ' + page)
        const { message, result }: any = await getAllArticlesAPI(1);
        const data: any = await getAllArticlesAPI(1);

        // console.log('----- API를 사용한 경우 ------')
        // console.log('message : ' + message)
        // console.log(JSON.stringify(result))
        return data
    }
)