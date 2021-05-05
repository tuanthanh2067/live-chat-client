import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularRooms } from "../../redux/actions/dataActions";

import RoomSector from "../Room/RoomSector";
import ProfileSector from "../Profile/ProfileSector";

const Home = () => {
  const dispatch = useDispatch();
  const popularRooms = useSelector((state) => state.data.popularRooms);

  useEffect(() => {
    dispatch(getPopularRooms(4));
  }, [dispatch]);

  let listPeople = [];
  for (let j = 0; j < 8; j++) {
    listPeople.push(j);
  }

  // todo: only get 4 rooms ---

  return (
    <StyledHome>
      <RoomSector
        title="Popular"
        rooms={popularRooms}
        path={"/rooms/popular"}
      />

      <ProfileSector
        title="Active gossiper"
        profiles={listPeople}
        path={"/users/active"}
      />

      <RoomSector
        title="Rooms you created"
        rooms={popularRooms}
        path={"/rooms/yours"}
      />
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
