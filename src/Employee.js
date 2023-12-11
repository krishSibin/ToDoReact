import React from 'react'
import { useState,useEffect } from 'react'

function Employee() {
    
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("MOUNTING ..");
        console.log("UPDATING "+count);

        return()=>{
            console.log("Cleaning "+count);
        }
    },[count])




  return (
    <div>
        <button onClick={()=>setCount(count+1)}>ADD COUNTER</button>
        <h1>COUNTER IS {count}</h1>
    </div>
  )
}

export default Employee