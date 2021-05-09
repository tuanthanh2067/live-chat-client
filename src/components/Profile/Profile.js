import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { logoutUser } from "../../redux/actions/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const date = new Date(user.dateCreated).toUTCString();

  const logoutHandler = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <StyledProfile>
      <StyledDetails>
        <StyledGroup>
          <p>User name:</p>
          <div>{user.userName}</div>
        </StyledGroup>
        <StyledGroup>
          <p>User Id:</p>
          <div>{user.userId}</div>
        </StyledGroup>
        <StyledGroup>
          <p>Joined:</p>
          <div>{date}</div>
        </StyledGroup>
        <StyledGroup>
          <p>Role:</p>
          <div>{user.role}</div>
        </StyledGroup>

        <StyledGroup>
          <p>Your rooms:</p>
          <Link to="/rooms/yours">
            <button>View all</button>
          </Link>
        </StyledGroup>

        <StyledGroup>
          <Link to="#">
            <button onClick={logoutHandler}>Log out</button>
          </Link>
        </StyledGroup>
      </StyledDetails>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledDetails = styled.div`
  max-width: 600px;
  min-width: 300px;
  width: 60%;
  height: 100%;
`;

const StyledGroup = styled.div`
  width: 100%;
  margin: 2.5em 0em;
  display: flex;
  flex-direction: column;

  & > p {
    color: white;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  & > div,
  a > button {
    color: grey;
    width: 100%;
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: transparent;
    text-align: left;
  }
`;

export default Profile;
