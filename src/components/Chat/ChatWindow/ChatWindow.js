import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import axios from "axios";

import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowFooter from "./ChatWindowFooter";
import ChatWindowBody from "./ChatWindowBody";

import { API_URL } from "../../../config/index";

// context
import { SocketContext } from "../../../context/socketContext";

// redux
import {
  updateFavoriteInRoom,
  updateUserInRoom,
  getCurrentRoom,
  getIsLiked,
} from "../../../redux/actions/dataActions";

import {
  CLEAR_CURRENT_ROOM,
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
} from "../../../redux/types";

const ChatWindow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [clients, setClients] = useState(0);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordPopup, setPasswordPopup] = useState(false);
  const [authenticateError, setAuthenticateError] = useState("");

  const socket = useContext(SocketContext);

  const userName = useSelector((state) => state.user.userName);
  const userId = useSelector((state) => state.user.userId);
  const roomInfo = useSelector((state) => state.data.currentRoom);
  const image = useSelector((state) => state.user.image);

  const handleSend = (e) => {
    e.preventDefault();

    if (chat.trim() === "") {
      toast("Please type your message");
      return;
    }

    socket.emit("sendMessage", { userName, chat });

    setMessages([...messages], { userName, chat, me: true, image: image });

    setChat("");
  };

  const requestToJoin = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/rooms/${roomInfo.roomId}/join`, { password: password })
      .then(() => {
        setAuthenticated(true);
        setAuthenticateError("");
        setPasswordPopup(false);
      })
      .catch((err) => {
        setAuthenticateError(err.response.data.errors);
      });
  };

  const setFavoriteHandler = () => {
    dispatch(updateFavoriteInRoom(id, userId));
  };

  useEffect(() => {
    if (id) {
      dispatch(getCurrentRoom(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (roomInfo && roomInfo.visibility === "public") {
      setAuthenticated(true);
    } else if (
      roomInfo &&
      !authenticated &&
      roomInfo.visibility === "private"
    ) {
      setPasswordPopup(true);
    }
  }, [roomInfo, authenticated]);

  useEffect(() => {
    // only want to run this one first time after user, id are available
    if (userId && id && authenticated) {
      dispatch(updateUserInRoom(id, userId));
      dispatch(getIsLiked(id));
    }
  }, [userId, id, authenticated, dispatch]);

  useEffect(() => {
    if (userName && userId && authenticated) {
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
        socket.emit("leaveRoom");

        dispatch({
          type: CLEAR_CURRENT_ROOM,
        });
        dispatch({
          type: CLEAR_MESSAGES,
        });
        dispatch({
          type: CLEAR_ERRORS,
        });
      };
    }
  }, [userName, userId, id, socket, dispatch, image, authenticated]);

  return (
    <>
      <StyledChatWindow>
        <ChatWindowHeader
          clients={clients}
          id={id}
          setFavorite={setFavoriteHandler}
          isLiked={roomInfo && roomInfo.isLiked}
          image={roomInfo && roomInfo.image}
          roomName={roomInfo && roomInfo.roomName}
        />
        <ChatWindowBody messages={messages} />
        <ChatWindowFooter chat={chat} setChat={setChat} onSent={handleSend} />
      </StyledChatWindow>

      {passwordPopup && (
        <Modal
          show={passwordPopup}
          animation={false}
          onHide={() => {
            setAuthenticateError("Please enter password to join the room");
          }}
        >
          <Modal.Header>
            <Modal.Title>Password is required to join!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StyledForm onSubmit={requestToJoin}>
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input type="submit" value="Join" />
            </StyledForm>
          </Modal.Body>

          {authenticateError && (
            <Modal.Footer style={{ color: "red" }}>
              {authenticateError}
            </Modal.Footer>
          )}
        </Modal>
      )}
    </>
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

  @media (max-width: 500px) {
    padding: 1em;
  }
`;

const StyledForm = styled.form`
  input[type="text"] {
    width: 75%;
    outline: none;
    padding: 7px 15px;
    border: 1px solid grey;
    border-radius: 12px;
  }

  input[type="submit"] {
    margin-left: 5%;
    width: 20%;
    padding: 7px;
    border: 1px solid grey;
    background: none;
    border-radius: 12px;
  }
`;

export default ChatWindow;
