import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NotificationWindow() {
  return (
    <StyledNotificationWindow>
      <StyledTitle>This is a notification</StyledTitle>
      <StyledDateCreated>a month ago</StyledDateCreated>

      <StyledDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
      </StyledDescription>

      <StyledButtons>
        <Link to="/">
          <StyledButton>Read more</StyledButton>
        </Link>
      </StyledButtons>
    </StyledNotificationWindow>
  );
}

const StyledNotificationWindow = styled.div`
  width: 90%;
  min-height: 200px;
  padding: 1em;
  border: 1px solid grey;
  border-radius: 24px;

  color: white;

  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2``;

const StyledDescription = styled.p``;

const StyledDateCreated = styled.p`
  color: grey;
`;

const StyledButtons = styled.div`
  border-top: 1px solid grey;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: grey;
  font-size: 1.75em;
  text-align: center;
`;
