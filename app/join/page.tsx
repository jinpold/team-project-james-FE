'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";
import axios from 'axios'
import React from 'react';
const SERVER = 'http://localhost:8080'


export default function join() {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    phone: "",
    job: "",
    height: "",
    weight: ""
  })

  const { username, password, checkPassword, name, phone, job, height, weight } = inputs;
  const handleChange = (e: any) => { //컨슈머 
    const { value, name } = e.target;
    setInputs(
      {
        ...inputs,
        [name]: value
      })
  }
   
  const router = useRouter();

  const handleSubmit = () => {
    alert("request가 가져가는 입력 값" + username + password + checkPassword +
      name + phone + job + height + weight)
    const url = `${SERVER}/api/users`
    const data = { username, password, checkPassword, name, phone, job, height, weight } // data = requestbody
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      }
    }
    axios.post(url, data, config)
      .then(res => {
        alert("response가 가져온 ID : " + JSON.stringify(res.data)) // response.responsebody = res.data = hashmap
        router.push("/login")
      })
  }


  return (<>
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} value={username} required /><br />

      <label htmlFor="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password} required /><br />

      <label htmlFor="checkPassword"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="checkPassword" onChange={handleChange} value={checkPassword} required /><br />

      <label htmlFor="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={name} required /><br />

      <label htmlFor="phone"><b>Phone Number</b></label>
      <input type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} value={phone} required /><br />

      <label htmlFor="job"><b>Job</b></label>
      <input type="text" placeholder="Enter Job" name="job" onChange={handleChange} value={job} required /><br />

      <label htmlFor="height"><b>Height</b></label>
      <input type="text" placeholder="Enter Height" name="height" onChange={handleChange} value={height} required /><br />

      <label htmlFor="weight"><b>Weight</b></label>
      <input type="text" placeholder="Enter Weight" name="weight" onChange={handleChange} value={weight} required /><br />



      <label>
        <input type="checkbox" defaultChecked={true} name="remember" style={{ marginBottom: "15px" }} /> Remember me
      </label>
      <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
      <div className="clearfix">
        <button type="button" className="cancelbtn" >Cancel</button>
        <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  </>);
}