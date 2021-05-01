import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import SocketIOClient from "socket.io-client";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowFooter from "./ChatWindowFooter";
import ChatWindowBody from "./ChatWindowBody";

const ChatWindow = () => {
  const [clients, setClients] = useState(0);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const userName = useSelector((state) => state.user.userName);
  const userId = useSelector((state) => state.user.userId);
  const { id } = useParams();

  let socketRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    socketRef.current.emit("sendMessage", { userName, chat });

    setMessages([...messages], { userName, chat, me: true });

    setChat("");
  };

  useEffect(() => {
    if (userName && userId) {
      socketRef.current = SocketIOClient("http://localhost:5000");

      socketRef.current.emit("switchRoom", {
        id: userId,
        name: userName,
        newRoom: id,
      });

      socketRef.current.on("init", ({ messages }) => {
        const AuthMessages = messages.map((message) => ({
          name: message.name,
          text: message.text,
          me: message.name === userName,
        }));
        setMessages(AuthMessages.reverse());
      });

      socketRef.current.emit("count", { roomId: id });

      socketRef.current.on("count", ({ clients }) => {
        setClients(clients);
      });

      socketRef.current.on("message", ({ name, text }) => {
        setMessages((messages) => [
          ...messages,
          { name: name, text: text, me: name === userName },
        ]);
      });

      socketRef.current.on("notification", ({ title }) => {
        setMessages((messages) => [...messages, { name: "BOT", text: title }]);
      });

      return () => socketRef.current.disconnect();
    }
  }, [userName, userId, id]);

  return (
    <StyledChatWindow>
      <ChatWindowHeader clients={clients} />
      <ChatWindowBody messages={messages} />
      <ChatWindowFooter chat={chat} setChat={setChat} onSent={handleSend} />
    </StyledChatWindow>
  );
};

const StyledChatWindow = styled.div`
  width: 100%;
  height: 100%;
  background: #27273f;
  border: 1px solid #373759;
  border-radius: 32px;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
`;

export default ChatWindow;
