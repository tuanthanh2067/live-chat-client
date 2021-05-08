import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RoomShowcase from "./RoomShowcase";

import { getYourRooms } from "../../redux/actions/dataActions";

export default function YourRooms() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.UI.loading);
  const userId = useSelector((state) => state.user.userId);

  const yourRooms = useSelector((state) => state.data.yourRooms);

  useEffect(() => {
    dispatch(getYourRooms(userId, 12, page - 1));
  }, [dispatch, userId, page]);

  const previousHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextHandler = () => {
    setPage(page + 1);
  };

  return (
    <RoomShowcase
      loading={loading}
      rooms={yourRooms}
      previousHandler={previousHandler}
      nextHandler={nextHandler}
      page={page}
    />
  );
}
