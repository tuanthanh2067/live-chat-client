import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function AddNotification() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      detail: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      detail: Yup.string().required("Detail is required"),
    }),
    onSubmit: (values) => {
      // values & image
    },
  });

  return (
    <StyledAddNotification>
      <form onSubmit={formik.handleSubmit}>
        <StyledGroup>
          <label>Notification title</label>
          <input
            type="text"
            placeholder="This is the title"
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
          />
          <StyledError>{formik.errors.title}</StyledError>
        </StyledGroup>
        <StyledGroup>
          <label>Notification description</label>
          <input
            type="text"
            placeholder="This is the description"
            onChange={formik.handleChange}
            value={formik.values.description}
            name="description"
          />
          <StyledError>{formik.errors.description}</StyledError>
        </StyledGroup>
        <StyledGroup>
          <label>Notification detail</label>
          <input
            type="text"
            placeholder="This is the detail"
            onChange={formik.handleChange}
            value={formik.values.detail}
            name="detail"
          />
          <StyledError>{formik.errors.detail}</StyledError>
        </StyledGroup>

        <StyledGroup>
          <StyledImageLabel htmlFor="image">
            Select notification image (optional)
          </StyledImageLabel>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            id="image"
            name="image"
            onChange={changeImageHandler}
          />
        </StyledGroup>

        <StyledGroup>
          <input type="submit" value="Submit notification" />
        </StyledGroup>
      </form>
      {preview && (
        <StyledGroup>
          <label>Image preview</label>
          <img alt="preview" src={preview}></img>
        </StyledGroup>
      )}
    </StyledAddNotification>
  );
}

const StyledAddNotification = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;
`;

const StyledGroup = styled.div`
  width: 100%;
  margin: 1.5em 0em;
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 1.5em;
    color: grey;
    color: white;
    margin-bottom: 0.5rem;
  }

  & > input {
    color: grey;
    width: 100%;
    background: transparent;
    padding: 0.85em 1.25em;
    border: 1px solid grey;
    border-radius: 24px;
    outline: transparent;
    text-align: left;
  }

  & > input[type="file"] {
    display: none;
    width: 0.1;
    height: 0.1;
    opacity: 0;
  }

  & > img {
    width: 100%;
  }
`;

const StyledError = styled.p`
  color: red;
  padding-left: 0.75em;

  font-size: 0.9em;
`;

const StyledImageLabel = styled.label`
  cursor: pointer;
`;
