import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { API } from "@/store/common/enums/API";
import AxiosConfig from "@/store/common/configs/axios-config";

export default function ArticlesRows(){
    const [articles, setArticles] = useState([]);
    const router = useRouter();
    const url = `${API.SERVER}/api/articles`
    const config = AxiosConfig();
    useEffect(() => {
        {
            axios.get(url, config).then(res => {
                const message = res.data.message
                console.log((message))
                if (message === 'SUCCESS') {
                    console.log("게시글이 있습니다.")
                    const arr = res.data.result
                    for (let element of arr) {
                        console.log(element)
                    }
                    setArticles(res.data.result)
                }
                else if (message === 'FAIL') {
                    console.log('게시글이 없습니다.');
                }
                else {
                    console.log("지정되지 않은 값")
                }

            })
        }
    }, [])
}