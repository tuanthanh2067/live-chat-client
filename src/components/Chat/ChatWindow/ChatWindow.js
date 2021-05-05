import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowFooter from "./ChatWindowFooter";
import ChatWindowBody from "./ChatWindowBody";

// context
import { SocketContext } from "../../../context/socketContext";

// redux
import { updateRoomInfo } from "../../../redux/actions/dataActions";

const ChatWindow = () => {
  const dispatch = useDispatch();

  const [clients, setClients] = useState(0);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = useContext(SocketContext);

  const userName = useSelector((state) => state.user.userName);
  const userId = useSelector((state) => state.user.userId);
  const { id } = useParams();

  const handleSend = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", { userName, chat });

    setMessages([...messages], { userName, chat, me: true });

    setChat("");
  };

  useEffect(() => {
    // only want to run this one first time after user, id are available
    if (userId && id) {
      dispatch(updateRoomInfo(id, userId));
    }
  }, [userId, id, dispatch]);

  useEffect(() => {
    if (userName && userId) {
      socket.emit("joinRoom", {
        id: userId,
        name: userName,
        newRoom: id,
      });

      // socket.emit("init", { roomId: id, userId: userId });

      // socket.on("init", ({ messages }) => {
      //   const AuthMessages = messages.map((message) => ({
      //     name: message.name,
      //     text: message.text,
      //     me: message.name === userName,
      //   }));
      //   setMessages(AuthMessages.reverse());
      // });

      socket.on("count", ({ clients }) => {
        setClients(clients);
      });

      socket.on("message", ({ name, text }) => {
        setMessages((messages) => [
          ...messages,
          { name: name, text: text, me: name === userName },
        ]);
      });

      socket.on("notification", ({ title }) => {
        setMessages((messages) => [...messages, { name: "BOT", text: title }]);
      });

      return () => {
        socket.emit("count", { roomId: id });
        socket.emit("leaveRoom");
      };
    }
  }, [userName, userId, id, socket]);

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
  height: 87vh;
  background: #27273f;
  border: 1px solid #373759;
  border-radius: 32px;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
`;

export default ChatWindow;
