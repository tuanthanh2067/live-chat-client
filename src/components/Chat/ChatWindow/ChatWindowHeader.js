import styled from "styled-components";

import ThemePark from "../../../assets/jpg/theme-park.jpg";

const ChatWindowHeader = ({ clients }) => {
  return (
    <StyledChatWindowHeader>
      <StyledLeft>
        <img src={ThemePark} alt="room-img"></img>
        <div>
          <h5>Javascript</h5>
          <p>{clients} active</p>
        </div>
      </StyledLeft>
      <StyledRight>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
          </svg>
        </button>
      </StyledRight>
    </StyledChatWindowHeader>
  );
};

const StyledChatWindowHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: white;
  h5,
  p {
    margin-bottom: 0;
  }
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.75em;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h5 {
      font-size: 1.125em;
    }
    p {
      font-size: 0.75em;
      color: grey;
    }
  }
`;

const StyledRight = styled.div`
  button {
    background: none;
    outline: none;
    border: none;
    margin-left: 1em;

    svg {
      fill: white;
    }
  }
`;

export default ChatWindowHeader;
