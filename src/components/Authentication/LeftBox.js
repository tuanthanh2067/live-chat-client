import styled from "styled-components";
import ChatImage from "../../assets/jpg/chat.jpg";

export default function LeftBox() {
  return (
    <StyledBoxLeft>
      <img src={ChatImage} alt="chat" />
      <h2>Welcome to gossip</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>

      <button>Learn more</button>
    </StyledBoxLeft>
  );
}

const StyledBoxLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  background: black;
  padding: 0em 2em;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  h2 {
    position: relative;
    ::after {
      bottom: -8px;
      left: 0%;
      content: "";
      position: absolute;
      width: 170px;
      height: 4px;
      background: white;
      border-radius: 50px;
    }
  }

  p,
  h2,
  button {
    z-index: 5;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    margin: 0em;
    opacity: 0.45;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    pointer-events: none;
  }

  * {
    margin: 0.5em 0em;
  }

  button {
    background: transparent;

    border: 1px solid white;
    color: white;

    padding: 0.75em;
    border-radius: 24px;

    transition: ease 0.45s all;

    :hover {
      background: white;
      color: black;
    }
  }

  @media (max-width: 1000px) {
    padding: 0em 0.75em;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
