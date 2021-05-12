import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { API_URL } from "../../config/index";

import MinimalProfile from "../Profile/MinimalProfile";
import { SET_ERRORS } from "../../redux/types";

export default function RoomSettings() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [room, setRoom] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/rooms/${id}`).then((res) => {
      setRoom(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (room) {
      axios
        .get(`${API_URL}/users/get-users?users=${room.admins}`)
        .then((res) => {
          setAdmins(res.data);
        })
        .catch((err) => {
          dispatch({
            type: SET_ERRORS,
            payload: err.response.data.errors,
          });
        });

      axios
        .get(`${API_URL}/users/get-users?users=${room.members}`)
        .then((res) => {
          setMembers(res.data);
        })
        .catch((err) => {
          dispatch({
            type: SET_ERRORS,
            payload: err.response.data.errors,
          });
        });
    }
  }, [room, dispatch]);

  return (
    <StyledRoomSettings>
      <StyledLeft>
        {admins && (
          <StyledAdmins>
            <h2>Admins: {admins.length}</h2>
            {admins.map((admin, idx) => (
              <StyledUser key={idx}>
                <MinimalProfile profile={admin} />
              </StyledUser>
            ))}
          </StyledAdmins>
        )}
        {members && (
          <StyledMembers>
            <h2>Members: {members.length}</h2>
            {members.map((member, idx) => (
              <StyledUser key={idx}>
                <MinimalProfile profile={member} />
              </StyledUser>
            ))}
          </StyledMembers>
        )}
      </StyledLeft>

      <StyledRight>
        {room && (
          <>
            <StyledSection>
              <p>Max members</p>
              <div>{room.maxNumbers}</div>
            </StyledSection>

            <StyledSection>
              <p>Date created</p>
              <div>{room.dateCreated}</div>
            </StyledSection>

            <StyledSection>
              <p>Room id</p>
              <div>{room.roomId}</div>
            </StyledSection>

            <StyledSection>
              <p>Room Name</p>
              <div>{room.roomName}</div>
            </StyledSection>
          </>
        )}

        <form>
          <label>Add new members</label>
          <input type="text" placeholder="Type their user id or user name" />

          <input type="submit" value="add" />
        </form>

        <form>
          <label>Add admins</label>
          <input type="text" placeholder="Type their user id or user name" />
          <input type="submit" value="add" />
        </form>

        <button>Delete this room</button>
      </StyledRight>
    </StyledRoomSettings>
  );
}

const StyledRoomSettings = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
`;

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 2em;
  }
`;

const StyledAdmins = styled.div`
  flex: 2;
  overflow: auto;

  & > h2 {
    color: white;
  }
`;

const StyledMembers = styled.div`
  flex: 5;
  overflow: auto;

  & > h2 {
    color: white;
  }
`;

const StyledUser = styled.div`
  margin-bottom: 1.25em;
`;

const StyledRight = styled.div`
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label {
      color: white;
      font-size: 1.5em;
      margin-bottom: 0.5rem;
    }
  }

  input,
  button {
    color: grey;
    width: 100%;
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: transparent;
    text-align: left;
  }

  input[type="submit"] {
    margin-top: 0.5em;
    width: 25%;
    text-align: center;
    margin-left: auto;
  }
`;

const StyledSection = styled.div`
  margin-bottom: 1em;
  & > p {
    color: white;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  & > div {
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
