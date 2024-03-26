'use client';
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"
const SERVER = 'http://localhost:8080'
interface IArticle{ // 엔티티 -> 최우선으로 작성 (선언부)
          id: number,
          title: string,
          content: string,
          writer: string,
          registerDate : string
}

const Article = (props:IArticle) => { //props가 IArticle의 인스턴스가 됨.
 return (
        <tr key = {props.id} > 
        <td>{props.title}</td>
        <td>{props.content}</td>
        <td>{props.writer}</td>
        <td>{props.registerDate}</td>
        </tr>);
}

export default function articles() { // 자료구조 ArrayList<>()

const router = useRouter();

const url = `${SERVER}/api/articles`
const config = {                  
   headers:{
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
       Authorization: `Bearer blah ~` ,
      "Access-Control-Allow-Origin": "*",
  }}
  
  axios.get(url,config) //request 
  .then(res=> {     
     const message = res.data.message //response
     alert((message))
     if (message ==='SUCCESS') {
       router.push("/articles/new-article");
     } 
     else if (message === 'FAIL') {
      alert('게시글이 없습니다.');
     }
     else {
      alert('지정한 값 없음');
      } 
    })
                   

const lists = [
{id : 0, title : "title", content : "content", writer : "writer", registerDate : "registerDate"}
]
const ArticleList = lists.map((v) => (<Article {...v}/>)) 
return ( // 스키마 부분
        <div>
        <h3>Article List</h3>
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
        </div> 
        );
}