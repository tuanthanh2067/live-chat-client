import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RoomShowcase from "./RoomShowcase";

import { getSearchRooms } from "../../redux/actions/dataActions";

export default function SearchRooms() {
  const location = useLocation();
  const dispatch = useDispatch();
  const query = queryString.parse(location.search);

  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.UI.loading);
  const searchRooms = useSelector((state) => state.data.searchRooms);

  useEffect(() => {
    dispatch(getSearchRooms(12, page - 1, query.title));
  }, [dispatch, page, query.title]);

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
      rooms={searchRooms}
      previousHandler={previousHandler}
      nextHandler={nextHandler}
      page={page}
    />
  );
}
