import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularRooms } from "../../redux/actions/dataActions";

import RoomShowcase from "./RoomShowcase";

const PopularRooms = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const popularRooms = useSelector((state) => state.data.popularRooms);
  const loading = useSelector((state) => state.UI.loading);

  useEffect(() => {
    dispatch(getPopularRooms(12, page - 1));
  }, [page, dispatch]);

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
      rooms={popularRooms}
      previousHandler={previousHandler}
      nextHandler={nextHandler}
      page={page}
    />
  );
};

export default PopularRooms;
