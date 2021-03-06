import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Loading from "../Loading/Loading";

import { API_URL } from "../../config/index";

import {
  getCurrentRoom,
  updateAdmin,
  updateMember,
  deleteRoom,
} from "../../redux/actions/dataActions";

import MinimalProfile from "../Profile/MinimalProfile";
import { SET_ERRORS } from "../../redux/types";

export default function RoomSettings() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [admins, setAdmins] = useState([]);
  const [members, setMembers] = useState([]);

  const [newAdmin, setNewAdmin] = useState("");
  const [newMember, setNewMember] = useState("");

  const currentRoom = useSelector((state) => state.data.currentRoom);
  const loading = useSelector((state) => state.UI.loading);

  dayjs.extend(relativeTime);

  const addAdminHandler = (e) => {
    e.preventDefault();
    dispatch(updateAdmin(newAdmin, id));
  };

  const addMemberHandler = (e) => {
    e.preventDefault();
    dispatch(updateMember(newMember, id));
  };

  const deleteRoomHandler = () => {
    dispatch(deleteRoom(id, history));
  };

  useEffect(() => {
    dispatch(getCurrentRoom(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentRoom) {
      axios
        .get(`${API_URL}/users/get-users?users=${currentRoom.admins}`)
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
        .get(`${API_URL}/users/get-users?users=${currentRoom.members}`)
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
  }, [currentRoom, dispatch]);

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
        {currentRoom && (
          <>
            <StyledSection>
              <p>Max members</p>
              <div>{currentRoom.maxNumbers}</div>
            </StyledSection>

            <StyledSection>
              <p>Date created</p>
              <div>{dayjs(currentRoom.dateCreated).fromNow()}</div>
            </StyledSection>

            <StyledSection>
              <p>Room id</p>
              <div>{currentRoom.roomId}</div>
            </StyledSection>

            <StyledSection>
              <p>Room Name</p>
              <div>{currentRoom.roomName}</div>
            </StyledSection>
          </>
        )}

        <form onSubmit={addMemberHandler}>
          <label>Add new members</label>
          <input
            type="text"
            placeholder="Type their user id"
            value={newMember}
            onChange={(e) => {
              setNewMember(e.target.value);
            }}
          />
          <button type="submit" disabled={loading}>
            {loading ? <Loading /> : "add"}
          </button>
        </form>

        <form onSubmit={addAdminHandler}>
          <label>Add admins</label>
          <input
            type="text"
            placeholder="Type their user id"
            value={newAdmin}
            onChange={(e) => {
              setNewAdmin(e.target.value);
            }}
          />
          <button type="submit" disabled={loading}>
            {loading ? <Loading /> : "add"}
          </button>
        </form>

        <button onClick={deleteRoomHandler}>Delete this room</button>
      </StyledRight>
    </StyledRoomSettings>
  );
}

const StyledRoomSettings = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
  }
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
    margin-bottom: 0.8em;

    label {
      color: white;
      font-size: 1.5em;
      margin-bottom: 0.35rem;
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

  button[type="submit"] {
    margin-top: 0.35em;
    width: 25%;
    text-align: center;
    margin-left: auto;
  }
`;

const StyledSection = styled.div`
  margin-bottom: 0.8em;
  & > p {
    color: white;
    font-size: 1.5em;
    margin-bottom: 0.35rem;
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
