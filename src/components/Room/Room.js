import styled from "styled-components";

import ThemePark from "../../assets/jpg/theme-park.jpg";

const Room = () => {
  return (
    <StyledRoom>
      <img src={ThemePark} alt="room-img"></img>
      <StyledInfo>
        <h4>League of legends</h4>
        <StyledDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </StyledDescription>
        <StyledRoomAccess>
          <StyledRoomInfo>
            <StyledRoomNumber>
              <StyledGreyDot></StyledGreyDot>
              <p>50</p>
            </StyledRoomNumber>
            <StyledRoomNumber>
              <StyledGreenDot></StyledGreenDot>
              <p>20</p>
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
              <p>5</p>
            </StyledRoomNumber>
          </StyledRoomInfo>
          <StyledRoomId>#11155513</StyledRoomId>
        </StyledRoomAccess>
      </StyledInfo>
    </StyledRoom>
  );
};

const StyledRoom = styled.div`
  min-width: 250px;
  width: 260px;
  height: 200px;
  background: #27273f;
  color: white;
  border-radius: 24px;
  border: 1px solid #373759;
  overflow: hidden;
  cursor: pointer;
  margin-right: 1.5em;
  transition: ease 0.25s all;

  :hover {
    width: 400px;
  }

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

const StyledGreyDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background: grey;
  margin-right: 0.25em;
`;

const StyledRoomId = styled.div`
  font-size: 0.8em;
  color: grey;
`;

export default Room;
