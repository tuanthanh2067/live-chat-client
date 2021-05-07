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
import {
  updateFavoriteInRoom,
  updateUserInRoom,
} from "../../../redux/actions/dataActions";

import { CLEAR_CURRENT_ROOM } from "../../../redux/types";

const ChatWindow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [clients, setClients] = useState(0);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = useContext(SocketContext);

  const userName = useSelector((state) => state.user.userName);
  const userId = useSelector((state) => state.user.userId);
  const roomInfo = useSelector((state) => state.data.currentRoom);
  const image = useSelector((state) => state.user.image);

  const handleSend = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", { userName, chat });

    setMessages([...messages], { userName, chat, me: true, image: image });

    setChat("");
  };

  const setFavoriteHandler = () => {
    dispatch(updateFavoriteInRoom(id, userId));
  };

  useEffect(() => {
    // only want to run this one first time after user, id are available
    if (userId && id) {
      dispatch(updateUserInRoom(id, userId));
    }
  }, [userId, id, dispatch]);

  useEffect(() => {
    if (userName && userId) {
      socket.emit("joinRoom", {
        id: userId,
        name: userName,
        newRoom: id,
        image: image,
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

      socket.on("message", ({ name, text, image }) => {
        setMessages((messages) => [
          ...messages,
          { name: name, text: text, me: name === userName, image: image },
        ]);
      });

      socket.on("notification", ({ title }) => {
        setMessages((messages) => [...messages, { name: "BOT", text: title }]);
      });

      return () => {
        socket.emit("count", { roomId: id });
        socket.emit("leaveRoom");

        dispatch({
          type: CLEAR_CURRENT_ROOM,
        });
      };
    }
  }, [userName, userId, id, socket, dispatch, image]);

  return (
    <StyledChatWindow>
      <ChatWindowHeader
        clients={clients}
        id={id}
        setFavorite={setFavoriteHandler}
        isLiked={roomInfo && roomInfo.isLiked}
        image={roomInfo && roomInfo.image}
      />
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
