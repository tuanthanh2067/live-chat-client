import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { getSmallCircleImage } from "../../helper/imageConfig";

const MinimalProfile = ({ profile }) => {
  dayjs.extend(relativeTime);

  return (
    <StyledMinimalProfile>
      <img src={getSmallCircleImage(profile.image)} alt="person-img"></img>

      <div>
        <h5>{profile.userName}</h5>
        <p>Joined {dayjs(profile.dateCreated).fromNow()}</p>
      </div>
    </StyledMinimalProfile>
  );
};

const StyledMinimalProfile = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;

  & > div {
    width: 100%;
    margin-left: 0.45em;
  }

  * {
    margin-bottom: 0px;
  }

  h5 {
    font-size: 0.95em;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    font-size: 0.9em;
    color: grey;
  }

  img {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export default MinimalProfile;
