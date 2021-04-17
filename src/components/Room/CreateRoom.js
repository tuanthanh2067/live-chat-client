import styled from "styled-components";

import { useFormik } from "formik";
import * as Yup from "yup";

const CreateRoom = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      visibility: "public",
      max: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Room name is required"),
      description: Yup.string().required("Description is required"),
      visibility: Yup.string().required("Visibility is required"),
      max: Yup.number()
        .typeError("Value must be a number")
        .required("This field is required")
        .positive("Must be more than zero"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledCreateRoom>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledFormGroup>
          <label>Room name</label>
          <input
            type="text"
            name="name"
            placeholder="League of legends"
            value={formik.values.name}
            onChange={formik.handleChange}
          ></input>
          <StyledError>{formik.errors.name}</StyledError>
        </StyledFormGroup>

        <StyledFormGroup>
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Let's go play some games together"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></input>
          <StyledError>{formik.errors.description}</StyledError>
        </StyledFormGroup>

        <StyledFormGroup>
          <label>Room visibility</label>
          <select
            name="visibility"
            value={formik.values.visibility}
            onChange={formik.handleChange}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <StyledError>{formik.errors.visibility}</StyledError>
        </StyledFormGroup>

        <StyledFormGroup>
          <label>Max members</label>
          <input
            type="text"
            name="max"
            placeholder="Default maximum members: 300"
            value={formik.values.max}
            onChange={formik.handleChange}
          ></input>
          <StyledError>{formik.errors.max}</StyledError>
        </StyledFormGroup>

        <input type="submit" value="Create now"></input>
      </StyledForm>
    </StyledCreateRoom>
  );
};

const StyledCreateRoom = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledForm = styled.form`
  max-width: 600px;
  min-width: 300px;
  width: 60%;
  height: 100%;

  input[type="submit"] {
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

  input[type="text"],
  select {
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: transparent;
    color: grey;
  }
`;

const StyledError = styled.p`
  color: red;
  margin-top: 0.25em;
  padding-left: 0.75em;

  font-size: 0.9em;
`;

export default CreateRoom;
