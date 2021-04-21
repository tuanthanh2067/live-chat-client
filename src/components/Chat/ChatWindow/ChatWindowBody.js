import styled from "styled-components";

import Message from "./Message";
import Notification from "./Notification";

const ChatWindowBody = ({ messages }) => {
  return (
    <StyledChatWindowBody>
      {messages.map((message, idx) => {
        return message.name !== "BOT" ? (
          <Message key={idx} message={message} />
        ) : (
          <Notification key={idx} notification={message} />
        );
      })}
    </StyledChatWindowBody>
  );
};

const StyledChatWindowBody = styled.div`
  width: 100%;
  display: flex;
  margin: 0.25em 0em;
  flex-direction: column;
  overflow: auto;
  flex: 15;
  max-height: 700px;
`;

export default ChatWindowBody;
