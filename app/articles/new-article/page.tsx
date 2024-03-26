'use client';
import { useRouter } from "next/navigation"
import axios from "axios";

const SERVER = 'http://localhost:8080'

interface IArticle {     // 엔티티. 최우선으로 작성
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const Article = (props: IArticle) => {      // props가 IArticle의 인스턴스가 됨, 엔티티
    return (
        <tr key={props.id}>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
        </tr>);
}

export default function articles() {   // 자바의 자료구조 ArrayList<>()
    const router = useRouter();
    const url = `${SERVER}/api/ariticles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
    axios.get(url, config).then(res => { 
        const message = res.data.message
        alert((message))
        if (message === 'SUCCESS') {
            router.push("게시글이 있습니다.")
        }
        else if (message === 'FAIL') {
            alert('게시글이 없습니다.');
        }
        else {
            alert("지정되지 않은 값")
        }

    })  
    const lists = [
        { id: 0, title: "1", content: "2", writer: "3", registerDate: "4" }
    ]
    const ArticleList = lists.map((v, i) =>   // v = Article의 엔티티
        (<Article key={i} {...v} />))
    return ( // 스키마 부분
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                {ArticleList}
            </tbody>
        </table>
    );
}