import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPopularRooms,
  getActiveGossipers,
  getYourRooms,
} from "../../redux/actions/dataActions";

import RoomSector from "../Room/RoomSector";
import ProfileSector from "../Profile/ProfileSector";

const Home = () => {
  const dispatch = useDispatch();
  const popularRooms = useSelector((state) => state.data.popularRooms);
  const activeGossipers = useSelector((state) => state.data.activeGossipers);
  const yourRooms = useSelector((state) => state.data.yourRooms);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    dispatch(getPopularRooms(4));
    dispatch(getActiveGossipers(8));
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getYourRooms(userId, 4));
    }
  }, [dispatch, userId]);

  return (
    <StyledHome>
      <RoomSector
        title="Popular"
        rooms={popularRooms}
        path={"/rooms/popular"}
      />

      <ProfileSector
        title="Active gossiper"
        profiles={activeGossipers}
        path={"/users/active"}
      />

      <RoomSector title="Your rooms" rooms={yourRooms} path={"/rooms/yours"} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    margin: 0.85em 0em 0.85em 0em;
  }
`;

export default Home;
