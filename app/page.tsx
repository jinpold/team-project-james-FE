'use client';
import { useState } from "react";
import axios from 'axios'
import Link from "next/link";
import { Box, Button, Input } from '@mui/material';
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";

export default function Home() {  // Home() = 컴포넌트 = 펑션

  const [name, setName] = useState('')
  const handleChange = (e:any) =>{setName(e.target.value)} // any는 자바의 ? 와일드카드
  const handleClick = ()=>{
    alert('request가 가져가는 이름 : '+ name )
  const url = `${API.SERVER}/name` // 자바의 "%s", sql의 '고%' 와 같다
  const data = {'name' : name} // 키에는 스트링만 가능 ''생략가능
  const config = AxiosConfig()

  axios.post(url,data,config)
  .then(res=>{
    alert(JSON.stringify(res.data))
  })}

  
  
  return(
  <div className="flex flex-col items-center">
  <div>Welcome to React !!</div>
  <h3>이름을 입력하세요</h3>
  <Input type="text" onChange={handleChange}/>
  <Button onClick={handleClick}>입력</Button><br />
  <Link href={`${PG.USER}/login`} >로그인</Link>
  <Link href={`${PG.USER}/join`}>회원가입</Link><br />
  <Link href={`${PG.DEMO}/mui-demo`}>MUI DEMO</Link>
  <Link href={`${PG.DEMO}/companies`}>COMPANIES</Link>
  <Link href={`${PG.DEMO}/counter`}>카운터</Link>
  <Link href={`${PG.DEMO}/redux-counter`}>리덕스 카운터</Link>
  </div>);
}
