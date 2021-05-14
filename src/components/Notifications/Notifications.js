import styled from "styled-components";
import { useState } from "react";

import NotificationWindow from "./NotificationWindow";
import Pagination from "../Pagination/Pagination";

const Notifications = () => {
  const [page, setPage] = useState(1);

  const previousHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextHandler = () => {
    setPage(page + 1);
  };
  return (
    <>
      <StyledNotifications>
        <StyledLeft>
          <NotificationWindow />
          <NotificationWindow />
        </StyledLeft>
        <StyledRight>
          <NotificationWindow />
          <NotificationWindow />
        </StyledRight>
      </StyledNotifications>
      <Pagination
        page={page}
        previousHandler={previousHandler}
        nextHandler={nextHandler}
      />
    </>
  );
};

const StyledNotifications = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
`;

const StyledLeft = styled.div`
  flex: 1;

  & > div {
    margin-bottom: 1em;
  }
`;

const StyledRight = styled.div`
  flex: 1;

  & > div {
    margin-bottom: 1em;
  }
`;

export default Notifications;
