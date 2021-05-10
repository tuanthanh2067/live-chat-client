import styled from "styled-components";

export default function Pagination({ previousHandler, nextHandler, page }) {
  return (
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
  );
}

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
