import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { logoutUser, uploadImage } from "../../redux/actions/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  dayjs.extend(relativeTime);

  const logoutHandler = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  const imageHandler = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    dispatch(uploadImage(formData, user.userId));
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
          <div>{dayjs(user.dateCreated).fromNow()}</div>
        </StyledGroup>
        <StyledGroup>
          <p>Role:</p>
          <div>{user.role}</div>
        </StyledGroup>

        <StyledGroup>
          <form>
            <label htmlFor="image">Upload your image here!</label>
            <input
              type="file"
              id="image"
              name="image"
              accept=".jpg, .png, .jpeg"
              onChange={imageHandler}
            />
          </form>
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
  margin: 1.5em 0em;
  display: flex;
  flex-direction: column;

  & > p {
    color: white;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  form > label {
    cursor: pointer;
    display: inline-block;
    color: grey;
    width: 100%;
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: transparent;
    text-align: left;
  }

  form > input[type="file"] {
    opacity: 0;
    z-index: -1;
    display: none;
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
