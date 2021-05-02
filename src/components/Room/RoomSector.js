import styled from "styled-components";
import Room from "./Room";
import { Link } from "react-router-dom";

const RoomSector = ({ title, rooms, path }) => {
  return (
    <StyledRoomSector>
      <h2>{title}</h2>
      <StyledRooms isAvailable={rooms.length !== 0 ? true : false}>
        {rooms.length !== 0 ? (
          rooms.map((room, idx) => <Room key={idx} room={room} />)
        ) : (
          <h3>No rooms are available to show</h3>
        )}
      </StyledRooms>

      <StyledViewAll>
        <Link to={path}>View all {">>>"}</Link>
      </StyledViewAll>
    </StyledRoomSector>
  );
};

const StyledRoomSector = styled.div`
  & > h2 {
    color: white;
    margin-bottom: 0.35em;
  }
`;

const StyledRooms = styled.div`
  width: 100%;
  height: 200px;
  display: flex;

  & > div {
    margin-right: 1.75em;
  }

  ${(props) =>
    !props.isAvailable &&
    `
      justify-content: center;
      align-items: center;
      text-align: center;
      & > h3 {
        color: white;
      }
  `}
`;

const StyledViewAll = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.25em 0em;
  & > a {
    color: white;
    text-decoration: none;
  }
`;

export default RoomSector;
