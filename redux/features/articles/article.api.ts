import { instance } from '@/redux/common/configs/axios-config'

export const fetchAllArticlesAPI = async (page: number) =>{
    try{
        const response = await instance.get('/all-articles',{ 
        // instace.get이 axios의 객체이다. (a) //await 지연처리로 가져오는것
        // axios 동기 / thunk로 감싸면 비동기
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}