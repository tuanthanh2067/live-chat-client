import styled from "styled-components";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function NotificationWindow({
  title,
  dateCreated,
  description,
  notificationId,
}) {
  dayjs.extend(relativeTime);

  return (
    <StyledNotificationWindow>
      <StyledTitle>{title}</StyledTitle>
      <StyledDateCreated>{dayjs(dateCreated).fromNow()}</StyledDateCreated>

      <StyledDescription>{description}</StyledDescription>

      <StyledButtons>
        <Link to={`/notification/${notificationId}`}>
          <StyledButton>Read more</StyledButton>
        </Link>
      </StyledButtons>
    </StyledNotificationWindow>
  );
}

const StyledNotificationWindow = styled.div`
  width: 100%;
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
