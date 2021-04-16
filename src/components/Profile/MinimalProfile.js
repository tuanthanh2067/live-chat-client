import styled from "styled-components";

import Person from "../../assets/jpg/person.jpg";

const MinimalProfile = () => {
  return (
    <StyledMinimalProfile>
      <img src={Person} alt="person-img"></img>

      <div>
        <h5>Small Black Crocodile</h5>
        <p>Joined 8 months</p>
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
    margin-left: 0.45em;
  }

  * {
    margin-bottom: 0px;
  }

  h5 {
    font-size: 0.95em;
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
