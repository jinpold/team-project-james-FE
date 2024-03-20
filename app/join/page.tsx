'use client';
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
import Link from "next/link";
const SERVER = 'http://localhost:8080'


export default function join() {


    
    return(<>
        <h1>회원가입</h1>
        <h3>ID</h3>
        <input type = "text" />
        <h3>Password</h3>
        <input type = "text" />
        <h3>CheckPassword</h3>
        <input type = "text" /> <br /> <br />
        <button>전송</button>
        </>);
}