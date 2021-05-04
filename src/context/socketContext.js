import { createContext, useEffect } from "react";
import SocketIOClient from "socket.io-client";

import { API_URL } from "../config/index";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socket = SocketIOClient(API_URL);

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
