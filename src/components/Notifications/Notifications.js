import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NotificationWindow from "./NotificationWindow";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

import { getNotifications } from "../../redux/actions/dataActions";

const Notifications = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.UI.loading);
  const notifications = useSelector((state) => state.data.notifications);

  useEffect(() => {
    dispatch(getNotifications(4, page - 1));
  }, [dispatch, page]);

  const previousHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextHandler = () => {
    setPage(page + 1);
  };

  let content;

  if (loading === true) {
    content = <Loading />;
  } else {
    content = (
      <>
        {notifications.length !== 0 ? (
          <>
            {notifications.map((n) => (
              <NotificationWindow
                title={n.title}
                description={n.description}
                dateCreated={n.dateCreated}
                notificationId={n.notificationId}
              />
            ))}
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "grey",
              marginTop: "2em",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            No more notifications to show
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {content}
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4em;
`;

export default Notifications;
