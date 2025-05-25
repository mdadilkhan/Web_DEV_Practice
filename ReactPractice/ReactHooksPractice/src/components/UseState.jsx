import { useState } from "react";
function fibonacciFive() {
    console.log("called");
    
    let a = 0, b = 1, next;
    for (let i = 2; i <= 5; i++) {
      next = a + b;
      a = b;
      b = next;
    }
    return b;
  }
const UseState = () => {
    const [count,setCount]=useState(()=>fibonacciFive())
    const [state,setState]=useState({count:10,theme:'blue'})

    
    
    const inc=()=>{
        //in normal count 
        setCount((prev)=>prev+1)

        //in case of object do this
        setState((prev)=>{
            return {...prev,count:prev.count+1}
        })
    }
    const dec=()=>{
        //in normal count 
        setCount((prev)=>prev-1)

        //in case of object do this
        setState((prev)=>{
            return {...prev,count:prev.count-1}
        })

    }
    
  return (
    <div style={{display:'flex', gap:10}}>
      <button style={{font:"16px", width:"40px"}} onClick={inc}>+</button>
      <span>{count}</span>
      {/* in case of object */}
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button style={{font:"16px",width:"40px"}} onClick={dec}>-</button>
    </div>
  );
};



export default UseState




