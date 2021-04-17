import styled from "styled-components";

import RoomSector from "../Room/RoomSector";
import ProfileSector from "../Profile/ProfileSector";

const Home = () => {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }

  let listPeople = [];
  for (let j = 0; j < 50; j++) {
    listPeople.push(j);
  }

  return (
    <StyledHome>
      <RoomSector title="Popular" rooms={list} />

      <ProfileSector title="Active gossiper" profiles={listPeople} />

      <RoomSector title="Rooms you created" rooms={list} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    margin: 1em 0em 3em 0em;
  }
`;

export default Home;
