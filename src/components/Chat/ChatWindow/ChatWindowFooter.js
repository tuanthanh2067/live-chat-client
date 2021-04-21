import styled from "styled-components";

const ChatWindowFooter = ({ onSent, chat, setChat }) => {
  return (
    <StyledChatWindowFooter>
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
  flex: 1;

  form {
    display: flex;
    align-items: center;
    width: 100%;

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
      width: 5%;
      border: none;
      background: transparent;
      outline: none;
      svg {
        fill: white;
      }
    }
  }
`;

export default ChatWindowFooter;
