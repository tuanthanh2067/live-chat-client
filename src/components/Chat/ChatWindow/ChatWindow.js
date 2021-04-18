import styled from "styled-components";

import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowFooter from "./ChatWindowFooter";
import ChatWindowBody from "./ChatWindowBody";

const ChatWindow = () => {
  return (
    <StyledChatWindow>
      <ChatWindowHeader />
      <ChatWindowBody />
      <ChatWindowFooter />
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
