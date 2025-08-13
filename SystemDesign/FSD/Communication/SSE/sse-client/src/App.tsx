
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [message,setMessage]=useState<string[]>([])
 

useEffect(()=>{
    const eventSource=new EventSource('http://localhost:3001/sse')


    eventSource.onmessage = (event) => {

      console.log(event);
      
      setMessage(prev => [...prev, event.data]);
    };

    eventSource.onerror = (err) => {
      console.error("SSE error:", err);
      eventSource.close();
    };

      return () => {
      eventSource.close();
    };
},[])

  return (
    <>
       <h1>SSE</h1>
       {
        message.map((item,index)=> <li key={index}>{item}</li>)
       }
    </>
  )
}

export default App
