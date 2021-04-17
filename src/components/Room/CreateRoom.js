import styled from "styled-components";

const CreateRoom = () => {
  return (
    <StyledCreateRoom>
      <StyledForm onSubmit>
        <StyledFormGroup>
          <label for="name">Room name</label>
          <input
            type="text"
            name="name"
            placeholder="League of legends"
          ></input>
        </StyledFormGroup>

        <StyledFormGroup>
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Let's go play some games together"
          ></input>
        </StyledFormGroup>

        <StyledFormGroup>
          <label for="visibility">Room visibility</label>
          <select name="visibility">
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </StyledFormGroup>

        <StyledFormGroup>
          <label for="max">Max members</label>
          <input
            type="number"
            name="max"
            placeholder="Default maximum members: 300"
          ></input>
        </StyledFormGroup>

        <button>Create now</button>
      </StyledForm>
    </StyledCreateRoom>
  );
};

const StyledCreateRoom = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledForm = styled.form`
  max-width: 500px;
  min-width: 300px;
  width: 50%;
  height: 100%;

  button {
    padding: 12px 32px;
    background: transparent;
    border: 1px solid grey;
    border-radius: 24px;
    color: white;

    transition: ease 0.35s all;
    :hover {
      background: #546896;
      border-color: #546896;
    }
  }
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2em 0em;

  label {
    color: white;
    font-size: 1.5em;
  }

  input,
  select {
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: none;
    color: grey;
  }
`;

export default CreateRoom;
