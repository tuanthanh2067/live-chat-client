import styled from "styled-components";
import { getThumbNail } from "../../helper/imageConfig";
import { Link } from "react-router-dom";

const Room = ({
  room: {
    image,
    dateCreated,
    description,
    likeAmount,
    members,
    roomId,
    roomName,
  },
  expandable = true,
}) => {
  return (
    <Link to={`/room/${roomId}`} style={{ textDecoration: "none" }}>
      <StyledRoom expandable={expandable}>
        <img src={getThumbNail(image)} alt="room-img"></img>
        <StyledInfo>
          <h4>{roomName}</h4>
          <StyledDescription>{description}</StyledDescription>
          <StyledRoomAccess>
            <StyledRoomInfo>
              <StyledRoomNumber>
                <StyledGreenDot></StyledGreenDot>
                <p>{members.length}</p>
              </StyledRoomNumber>
              <StyledRoomNumber>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                </svg>
                <p>{likeAmount}</p>
              </StyledRoomNumber>
            </StyledRoomInfo>
            <StyledRoomId>#{roomId}</StyledRoomId>
          </StyledRoomAccess>
        </StyledInfo>
      </StyledRoom>
    </Link>
  );
};

const StyledRoom = styled.div`
  width: 100%;
  height: 200px;
  background: #27273f;
  color: white;
  border-radius: 24px;
  border: 1px solid #373759;
  overflow: hidden;
  cursor: pointer;
  transition: ease 0.25s all;

  * {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  h4 {
    margin-top: 0.45em;
    margin-bottom: 0.125em;
    font-size: 1.35em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const StyledInfo = styled.div`
  padding: 0em 0.45em;
`;

const StyledDescription = styled.p`
  font-size: 0.85em;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(200, 200, 200);
`;

const StyledRoomAccess = styled.div`
  margin-top: 0.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledRoomInfo = styled.div`
  display: flex;
`;

const StyledRoomNumber = styled.div`
  display: flex;
  align-items: center;
  margin: 0em 0.35em;
  p {
    font-size: 0.9em;
  }
  svg {
    width: 12px;
    height: 12px;
    fill: red;
    display: inline-block;
    margin-right: 0.25em;
  }
`;

const StyledGreenDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background: #17bf44;
  margin-right: 0.25em;
`;

const StyledRoomId = styled.div`
  font-size: 0.8em;
  color: grey;
`;

export default Room;
