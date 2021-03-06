import Loading from "../Loading/Loading";
import Room from "./Room";
import styled from "styled-components";

import Pagination from "../Pagination/Pagination";

const RoomShowcase = ({
  loading,
  rooms,
  previousHandler,
  nextHandler,
  page,
}) => {
  let content;

  if (loading === true) {
    content = <Loading />;
  } else {
    content = (
      <>
        <StyledRooms>
          {rooms.length !== 0 ? (
            rooms.map((room, idx) => <Room key={idx} room={room} />)
          ) : (
            <div
              style={{
                textAlign: "center",
                color: "grey",
                marginTop: "2em",
                fontSize: "2em",
                fontWeight: "bold",
              }}
            >
              No more rooms to show
            </div>
          )}
        </StyledRooms>

        <Pagination
          previousHandler={previousHandler}
          nextHandler={nextHandler}
          page={page}
        />
      </>
    );
  }

  return <StyledShowcase>{content}</StyledShowcase>;
};

export default RoomShowcase;

const StyledShowcase = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledRooms = styled.div`
  width: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1.5em;
`;
