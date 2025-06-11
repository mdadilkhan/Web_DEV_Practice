// src/App.jsx
import React,{useEffect, useState} from 'react';
import useSocket from './hooks/useSocket';

const App = () => {
  const socket = useSocket("http://localhost:8000");
  const [message,setMessage]=useState("")
  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
    });

    // Listen to custom events
    socket.on("receiveMessage", (message) => {
      console.log(`Received message: ${socket.id}`, message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receiveMessage");
    };
  }, [socket]);

  // const sendMessage = () => {
  //   socket.emit("sendMessage",message);
  // };

  const handleSubmit=(e)=>{
    e.preventDefault();
    socket.emit("sendMessage",message);
    setMessage("")
  }

  const handleChange=(e)=>{
    setMessage(e.target.value)
  }

  
  return (
    <div>
      <h1>Socket.IO Client</h1>
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="message" // This must match the key you want to update
        value={message}
        onChange={handleChange}/>
      <button type='submit'>Send Message</button>
        
      </form>
  
    </div>
  );
};

export default App;