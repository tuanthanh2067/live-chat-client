import styled from "styled-components";
import { Link } from "react-router-dom";

import MinimalProfile from "./MinimalProfile";

const ProfileSector = ({ title, profiles, path }) => {
  return (
    <StyledProfileSector>
      <h2>{title}</h2>
      <StyledProfiles>
        {profiles.map((profile, idx) => (
          <MinimalProfile key={idx} room={profile} />
        ))}
      </StyledProfiles>
      <StyledViewAll>
        <Link to={path}>View all {">>>"}</Link>
      </StyledViewAll>
    </StyledProfileSector>
  );
};

const StyledProfileSector = styled.div`
  & > h2 {
    color: white;
    margin-bottom: 0.35em;

    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

const StyledProfiles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin: 0em 0.75em 1.25em 0em;
  }
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

export default ProfileSector;
