import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "./article.model";
import { fetchAllArticlesAPI } from "./article.api";
import axios from "axios";
import { API } from "@/redux/common/enums/API";
import AxiosConfig, { instance } from "@/redux/common/configs/axios-config";


export const fetchAllArticles: any = createAsyncThunk( 
    //fetchAllArticles는 리액트에서 넘어옴, createAsyncThunk = Async로 처리하는것->Redux-thunk이다. 썽크 없으면 sync

    'articles/fetchAllArticles', // 액션이다 (액션을 한번만 써서 여기서 바로 사용)
    async (page: number) => {
        console.log('fetchAllArticles page : ' + page)

        //const { message, result }: any = await fetchAllArticles(1);
        const data:any = await  fetchAllArticlesAPI(1);


        // console.log('----- API를 사용한 경우 ------')
        // console.log('message : ' + message)
        // console.log(JSON.stringify(result))
        return data
    }
)