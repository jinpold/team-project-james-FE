'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"
import axios from 'axios'
const SERVER = 'http://localhost:8080'
export default function login() {

  

  const [username, setUsername] = useState('')
  const [password, SetPassword] = useState('')

  const handleUsername = (e:any) => {setUsername(e.target.value)}
  const handlePassword = (e:any) => {SetPassword(e.target.value)}

  const router = useRouter();

  const handleSubmit = () => {
    alert("request가 가져가는 입력 ID" + username)
  const url = `${SERVER}/api/login`
  const data = {username , password} 
  const config = {                  
    headers:{
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
       Authorization: `Bearer blah ~` ,
      "Access-Control-Allow-Origin": "*",
  } }
  
  axios.post(url,data,config) //request 
  .then(res=> {     
     const message = res.data.message //response
     alert((message))
     if (message ==='SUCCESS') {
       router.push("/articles/new-article")
     } 
     else if (message === 'FAIL') {
      alert('FAIL');
     }
     else if (message === 'WRONG_PASSWORD'){
      alert('WRONG_PASSWORD');
     }
     else {
      alert('지정한 값 없음');
      } 
    })
  }
 
  return(<>
  <h1>로그인</h1>
  <h3>ID</h3>
  <input type = "text" onChange={handleUsername}/>
  <h3>Password</h3>
  <input type = "text" onChange={handlePassword}/> <br /> <br />
  <button onClick={handleSubmit}>전송</button>
  </>);
  
}
