import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";

import Room from "./Room";

const RoomSector = ({ title, rooms }) => {
  return (
    <StyledRoomSector>
      <h2>{title}</h2>
      <StyledRooms>
        <HorizontalScroll>
          {rooms.map((room, idx) => (
            <Room key={idx} room={room} />
          ))}
        </HorizontalScroll>
      </StyledRooms>
    </StyledRoomSector>
  );
};

const StyledRoomSector = styled.div`
  & > h2 {
    color: white;
    margin-bottom: 0.5em;
  }
`;

const StyledRooms = styled.div`
  width: 100%;
  height: 200px;
  & > div {
    margin-right: 3em;
  }
`;

export default RoomSector;
