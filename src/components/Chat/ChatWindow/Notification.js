import styled from "styled-components";

const Notification = ({ notification }) => {
  return (
    <StyledNotification>
      <p>{notification.text}</p>
    </StyledNotification>
  );
};

const StyledNotification = styled.div`
  color: black;
  padding: 0.75em;
  background: transparent;
  color: grey;
  border: 1px solid grey;
  border-radius: 32px;
  text-align: center;

  margin: 0.45em 0em;

  p {
    margin-bottom: 0;
  }
`;

export default Notification;
