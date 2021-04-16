import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";

import Room from "../Room/Room";
import MinimalProfile from "../Profile/MinimalProfile";

const Home = () => {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(<Room key={i} />);
  }

  let listPeople = [];
  for (let j = 0; j < 50; j++) {
    listPeople.push(<MinimalProfile />);
  }

  return (
    <StyledHome>
      <StyledPopular>
        <h2>Popular</h2>

        <StyledPopularRooms>
          <HorizontalScroll>{list}</HorizontalScroll>
        </StyledPopularRooms>
      </StyledPopular>

      <StyledActive>
        <h2>Active gossiper</h2>
        <StyledActiveUsers>
          <HorizontalScroll>{listPeople}</HorizontalScroll>
        </StyledActiveUsers>
      </StyledActive>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledPopular = styled.div`
  margin: 1.25em 0em;
  & > h2 {
    color: white;
    margin-bottom: 0.5em;
  }
`;

const StyledPopularRooms = styled.div`
  width: 100%;
  height: 220px;
  & > div {
    margin-right: 3em;
  }
`;

const StyledActiveUsers = styled.div`
  width: 100%;
  height: 50px;
`;

const StyledActive = styled.div`
  & > h2 {
    color: white;
    margin-bottom: 0.5em;
  }
`;

export default Home;
