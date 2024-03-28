'use client';
import { Button } from "@mui/base"
import { ClickAwayListener } from "@mui/material"
import { count } from "console"
import { useState } from "react"

export default function Counter(){

     const [count, setCount] = useState(0)

     const handlePlus = () => {
             setCount(count+1)
     }

     const handleMinus = () => {
            setCount(count-1)
                   
     }
     return(<>
     <h1>Counter : {count}</h1>
     <Button onClick={handlePlus}>+</Button> <br />
     <Button onClick={handleMinus}>-</Button>
     </>)
}