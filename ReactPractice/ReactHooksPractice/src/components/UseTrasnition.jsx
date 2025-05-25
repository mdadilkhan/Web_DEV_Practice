import React, { useState, useTransition } from 'react'

const UseTrasnition = () => {
    const [isPending,startTrasnition]=useTransition()
    console.log(isPending,startTrasnition);
    
    const [input,setInput]=useState("")
    const [list,setList]=useState([])
    const LIST_SIZE=20000
    const handleChange=(e)=>{
       setInput(e.target.value);
       startTrasnition(()=>{
        const l=[];
        for(let i=0;i<LIST_SIZE;i++){
           l.push(e.target.value)
        }
        setList(l)
       })
      
    }
    // console.log(list);
    
  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>
        {/* <button onClick={}></button> */}
        {
           isPending? "Loading...." : list.map((item,index)=><p key={index}>{item}</p>)
        }
    </div>
  )
}

export default UseTrasnition
