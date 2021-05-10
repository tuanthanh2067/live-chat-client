import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserShowcase from "./UserShowcase";

import { getActiveGossipers } from "../../redux/actions/dataActions";

export default function ActiveUsers() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.UI.loading);

  const activeUsers = useSelector((state) => state.data.activeGossipers);

  useEffect(() => {
    dispatch(getActiveGossipers(20, page - 1));
  }, [dispatch, page]);

  const previousHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextHandler = () => {
    setPage(page + 1);
  };

  return (
    <UserShowcase
      loading={loading}
      users={activeUsers}
      previousHandler={previousHandler}
      nextHandler={nextHandler}
      page={page}
    />
  );
}
