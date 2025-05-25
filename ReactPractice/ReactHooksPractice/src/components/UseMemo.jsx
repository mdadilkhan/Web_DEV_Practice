import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {

    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);

    function slowFunction(n){
        console.log("called");
        
        for(let i =0;i<1000000000;i++){}
        return n*2
    }
    const doubleNumber=useMemo(()=>{
        return slowFunction(number)
    },[number])

    //here theme varible is updating its refrence when ever component re render so to avoid this
    // const theme={
    //     backgroundColor: dark ? 'red' : 'green',
    //     color: dark ? 'black': 'white'
    // } 
    const theme=useMemo(()=>{
       return  {
        backgroundColor: dark ? 'red' : 'green',
        color: dark ? 'black': 'white'
    }
    },[dark])
   
  return (
    <div>
         <input value={number} type="text" onChange={(e)=>{setNumber(e.target.value)}} />
         <button onClick={()=>{setDark(prev=>!prev)}}>Change Color</button>
         <div style={theme}>{doubleNumber}</div>
    </div>
  )
}

export default UseMemo


