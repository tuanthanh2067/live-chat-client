import styled from "styled-components";
import { Picker } from "emoji-mart";
import { useState } from "react";

import "emoji-mart/css/emoji-mart.css";

const ChatWindowFooter = ({ onSent, chat, setChat }) => {
  const [emojiMart, setEmojiMart] = useState(false);

  const emojiMartHandler = () => {
    setEmojiMart((prev) => !prev);
  };

  const handleAddEmoji = (emoji) => {
    setChat((prev) => prev + emoji.native);
  };

  return (
    <StyledChatWindowFooter>
      <StyledEmoji onClick={emojiMartHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
        </svg>
      </StyledEmoji>

      {emojiMart && (
        <Picker
          title="Pick your emoji…"
          emoji="point_up"
          style={{ position: "absolute", bottom: "50px", left: "12px" }}
          theme="dark"
          onClick={(emoji) => handleAddEmoji(emoji)}
        />
      )}

      <form onSubmit={onSent}>
        <input
          type="text"
          placeholder="Aa"
          value={chat}
          onChange={(e) => {
            setChat(e.target.value);
          }}
        />

        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
          </svg>
        </button>
      </form>
    </StyledChatWindowFooter>
  );
};

const StyledChatWindowFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  form {
    display: flex;
    align-items: center;
    width: 95%;

    input[type="text"] {
      padding: 0.5em 1em;
      width: 95%;
      border: 1px solid grey;
      border-radius: 24px;
      background: transparent;
      outline: none;
      color: grey;
    }

    button {
      margin: 0 0.75em;
      border: none;
      background: transparent;
      outline: none;
      svg {
        fill: white;
      }
    }
  }
`;

const StyledEmoji = styled.div`
  margin: 0 0.75em;
  cursor: pointer;
  svg {
    fill: white;
  }
`;

export default ChatWindowFooter;
