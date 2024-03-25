'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'
import Link from "next/link";
const SERVER = 'http://localhost:8080/api'


export default function join() {

    const [inputs, setInputs] = useState({
        username : "",
        password : "",
        checkPassword : "",
        name : "",
        phone : "",
        job : "",
        height : "",
        weight : ""
    })

    const {username, password, checkPassword, name, phone, job, height, weight} = inputs;
    const handleChange = (e:any) => {
    	const {value, name} = e.target;
        setInputs({...inputs,
        [username] : value,
        [password] : value,
        [checkPassword] : value,
        [name] : value,
        [phone] : value,
        [job] : value,
        [height] : value,
        [weight] : value,
        
    })}

    const router = useRouter();


    const handleClick = () => {alert("request가 가져가는 입력 ID" + username + 
    password + checkPassword + name + phone + job + height + weight)
    const url = `${SERVER}/user`
    const data = {username , password, checkPassword, name, phone, job, height, weight}
    const config = {
        headers:{
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
           Authorization: `Bearer blah ~` ,
          "Access-Control-Allow-Origin": "*",
    }}

    axios.post(url,data,config)  
    .then(response=>{alert("response가 가져온 ID : " + JSON.stringify(response.data)) 
    router.push("/login")
    })}


    return(<>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
        <label htmlFor="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required onChange={handleChange} value={username}/><br />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={password}required/><br />
        <label htmlFor="checkPassword"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="checkPassword" onChange={handleChange} value={checkPassword}required/><br />
        <label htmlFor="name"><b>Name</b></label>
        <input type="text" placeholder="Enter Password" name="name" onChange={handleChange} value={name}required/><br />
        <label htmlFor="phone"><b>Phone Number</b></label>
        <input type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange} value={phone}required/><br />
        <label htmlFor="job"><b>Job</b></label>
        <input type="text" placeholder="Enter Job" name="job" onChange={handleChange} value={job}required/><br />
        <label htmlFor="height"><b>Height</b></label>
        <input type="text" placeholder="Enter Height" name="height" onChange={handleChange} value={height}required/><br />
        <label htmlFor="weight"><b>Weight</b></label>
        <input type="text" placeholder="Enter Weight" name="weight" onChange={handleChange} value={weight}required/><br />
        <label>
        <input type="checkbox" defaultChecked= {true} name="remember" style={{marginBottom:"15px"}}/> Remember me
        </label>
        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
        <div className="clearfix">
        <button type="button" className="cancelbtn" >Cancel</button>
        <button type="submit" className="signupbtn" onClick={handleClick}>Sign Up</button>
      
    </div>
  </div>
  </>);
}
