// src/hooks/useSocket.js
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const useSocket = (serverUrl) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io(serverUrl, {
      reconnection: true,
      reconnectionAttempts: Infinity,
      randomizationFactor: 0.5,
      transports: ["websocket"], // Optional: skip polling if supported
      withCredentials:true
    });

    setSocket(socketIo);

    return () => {
      socketIo.disconnect(); // Cleanup on unmount
    };
  }, [serverUrl]);

  return socket;
};

export default useSocket;