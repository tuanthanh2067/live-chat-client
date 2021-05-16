import styled from "styled-components";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { getSmallCircleImage } from "../../../helper/imageConfig";

const ChatWindowHeader = ({
  clients,
  id,
  setFavorite,
  isLiked,
  image,
  roomName,
}) => {
  return (
    <StyledChatWindowHeader>
      <StyledLeft>
        {image ? (
          <img src={getSmallCircleImage(image)} alt="room-img"></img>
        ) : (
          <Skeleton circle={true} width={50} height={50} />
        )}
        <div>
          <h5>{roomName || <Skeleton />}</h5>
          <p>{clients ? clients + " clients" : <Skeleton />}</p>
        </div>
      </StyledLeft>
      <StyledRight>
        <Link to={`/room/${id}/settings`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
          </svg>
        </Link>

        <button onClick={setFavorite}>
          {isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
            </svg>
          )}
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
  button,
  a {
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
