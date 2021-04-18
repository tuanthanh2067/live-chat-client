import styled from "styled-components";

import Message from "./Message";

const ChatWindowBody = () => {
  return (
    <StyledChatWindowBody>
      <Message />
      <Message />
      <Message />
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
