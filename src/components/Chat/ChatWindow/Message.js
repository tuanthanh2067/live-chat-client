import styled from "styled-components";

import Person from "../../../assets/jpg/person.jpg";

const Message = ({ message }) => {
  return (
    <StyledMessage me={message.me}>
      <div>
        <img src={Person} alt="person-img"></img>
      </div>
      <StyledText>
        <p>{message.name}</p>
        <div>{message.text}</div>
      </StyledText>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: ${(props) => (props.me ? "row-reverse" : "row")};
  align-items: center;
  margin: 0.5em 0em;

  p {
    margin-bottom: 0;
  }

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 0.5em;

  & > p {
    font-size: 0.8em;
    color: grey;
    margin-left: 0.95em;
  }

  & > div {
    font-size: 0.975em;
    padding: 0.65em 1.125em;
    background: #171726;
    border-radius: 24px;
  }
`;

export default Message;
