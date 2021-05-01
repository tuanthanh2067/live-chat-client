import styled from "styled-components";

import Room from "../Room/Room";

const Favorites = () => {
  let rooms = [];
  for (let i = 0; i < 20; i++) {
    rooms.push(<Room key={i} expandable={false} />);
  }
  return <StyledFavorites>{rooms}</StyledFavorites>;
};

const StyledFavorites = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 2.25em;
  }
`;

export default Favorites;
