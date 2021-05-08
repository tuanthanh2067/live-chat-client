import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFavoriteRooms } from "../../redux/actions/dataActions";

import RoomShowcase from "./RoomShowcase";

const FavoriteRooms = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const favoriteRooms = useSelector((state) => state.data.favoriteRooms);
  const userId = useSelector((state) => state.user.userId);
  const loading = useSelector((state) => state.UI.loading);

  useEffect(() => {
    dispatch(getFavoriteRooms(userId, 12, page - 1));
  }, [page, dispatch, userId]);

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
      rooms={favoriteRooms}
      previousHandler={previousHandler}
      nextHandler={nextHandler}
      page={page}
    />
  );
};

export default FavoriteRooms;
