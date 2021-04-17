import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";

import MinimalProfile from "./MinimalProfile";

const RoomSector = ({ title, profiles }) => {
  return (
    <StyledProfileSector>
      <h2>{title}</h2>
      <StyledProfiles>
        <HorizontalScroll>
          {profiles.map((profile, idx) => (
            <MinimalProfile key={idx} room={profile} />
          ))}
        </HorizontalScroll>
      </StyledProfiles>
    </StyledProfileSector>
  );
};

const StyledProfileSector = styled.div`
  & > h2 {
    color: white;
    margin-bottom: 0.5em;
  }
`;

const StyledProfiles = styled.div`
  width: 100%;
  height: 50px;
`;

export default RoomSector;
