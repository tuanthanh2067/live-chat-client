import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Room from "./Room";
import Loading from "../Loading/Loading";

import { getPopularRooms } from "../../redux/actions/dataActions";

const RoomShowcase = () => {
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

  let content;

  if (loading === true) {
    content = <Loading />;
  } else {
    content = (
      <>
        <StyledRooms>
          {popularRooms.length !== 0 ? (
            popularRooms.map((room, idx) => <Room key={idx} room={room} />)
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

        <StyledPagination>
          <StyledLeftArrow onClick={previousHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </StyledLeftArrow>

          <span>{page}</span>

          <StyledRightArrow onClick={nextHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </StyledRightArrow>
        </StyledPagination>
      </>
    );
  }

  return <StyledShowcase>{content}</StyledShowcase>;
};

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

const StyledPagination = styled.div`
  margin-top: 3em;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 75px;

  & > span {
    color: #546896;
    font-weight: bold;
    font-size: 2em;
    pointer-events: none;
  }

  & > button {
    background: transparent;
    border: none;
    outline: none;
    margin: 0em 2.25em;

    svg {
      width: 50px;
      height: 50px;
      fill: #546896;
      transition: all 0.25s ease;

      :hover {
        fill: #8caaf3;
      }
    }
  }
`;

const StyledLeftArrow = styled.button`
  transform: rotate(90);
  svg {
    transform: rotate(180deg);
  }
`;

const StyledRightArrow = styled.button``;

export default RoomShowcase;
