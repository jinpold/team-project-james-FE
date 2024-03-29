'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";
import axios from 'axios'
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import { PG } from "@/redux/common/enums/PG";

const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, SetPassword] = useState('')

  const handleUsername = (e: any) => { setUsername(e.target.value) }
  const handlePassword = (e: any) => { SetPassword(e.target.value) }

  const router = useRouter();

  const handleSubmit = () => {
    alert("request가 가져가는 입력 ID" + username)
    const url = `${API.SERVER}/login`
    const data = { username, password } // <- (원본 un : un, pw : pw ) Key & value가 같으면 생략가능 -> username : username ~
    const config = AxiosConfig()

    axios.post(url, data, config) // = requestbody
      .then(res => {                       // res.data.message = 자바의 "message", 
        const message = res.data.message   // JSON.stringify = toString() , res.data = responsebody
        alert((message))
        if (message === 'SUCCESS') {
          router.push(`${PG.BOARD}/articles`)
        }
        else if (message === 'FAIL') {
          alert('FAIL');
        }
        else if (message === 'WRONG PASSWORD') {
          alert('WRONG PASSWORD');
        }
        else {
          alert('지정한 값 없음');
        }
      })
  }



  return (<>
    <h1>로그인</h1>
    <h3>ID</h3>
    <input type="text" onChange={handleUsername} />
    <h3>Password</h3>
    <input type="text" onChange={handlePassword} /> <br /> <br />
    <button onClick={handleSubmit}>전송</button>
  </>);
}
export default LoginPage;