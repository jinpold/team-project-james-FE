'use client';
import { useRouter } from "next/navigation"
import { useEffect, useState} from "react"
import { DataGrid } from "@mui/x-data-grid"
import axios from "axios"
import { Box } from "@mui/material";
import { PG } from "@/app/atoms/enums/PG";
import AxiosConfig from "@/app/organisms/configs/axios-config"
import ArticleRows from "@/app/organisms/rows/article-rows"
const SERVER = 'http://localhost:8080'


export default function articles() { // 자바의 자료구조 ArrayList<>()
    const router = useRouter(); // 라우터 가져오기

    const [articles, setArticles] = useState([])

    const url = `${PG.BOARD}/articles`
    const config = AxiosConfig()
    useEffect(()=>{
          axios.get(url, config)
            .then(res => { 
              const message = res.data.message // 자바에서 json으로 보내면 map구조 
              console.log((message))
               if (message === 'SUCCESS') {
               console.log("게시글이 있습니다.")
               const array = res.data.result  // 자바에서 List로 보내면 arry 구조
               for (let element of array) { //element가 인덱스이고 그 안엔 value도 포함
                console.log(element); 
               }
                setArticles(res.data.result)
               }else if (message === 'FAIL') {
               console.log('게시글이 없습니다.');
               }else {
                console.log("지정되지 않은 값")
            }
        })  

    },[]);
    
    return ( 
    <div>
        <h3>게시글 목록</h3>
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={ArticleRows()}
        columns={ArticleRows()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        />
        </Box>
    </div>
    );
}