'use client';
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
import Link from "next/link";
const SERVER = 'http://localhost:8080'
export default function Home() {  // Home() = 컴포넌트 = 펑션

  const [name, setName] = useState('')

  const handleChange = (e:any) =>{setName(e.target.value)} // any는 자바의 ? 와일드카드

  const handleClick = ()=>{
    alert('request가 가져가는 이름 : '+ name )
  const url = `${SERVER}/name` // 자바의 "%s", sql의 '고%' 와 같다
  const data = {'name' : name} // 키에는 스트링만 가능 ''생략가능
  const config = {
    headers:{
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
       Authorization: `Bearer blah ~` ,
      "Access-Control-Allow-Origin": "*",
  }} // 디폴트값
  axios.post(url,data,config)
  .then(res=>{
    alert("response가 가져온 이름 : " + JSON.stringify(res.data))
  })}
  return(<>
  <div>Welcome to React !!</div>
  <h3>이름을 입력하세요</h3>
  <input type="text" onChange={handleChange}/><br />
  <button onClick={handleClick}>입력</button><br />
  <Link href={"/login"} >로그인</Link><br />
  <Link href={"/join"} >회원가입</Link>
  </>); // return ( ) = 컨텐트
}