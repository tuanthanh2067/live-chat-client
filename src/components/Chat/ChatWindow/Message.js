import styled from "styled-components";

import Person from "../../../assets/jpg/person.jpg";

const Message = () => {
  return (
    <StyledMessage>
      <div>
        <img src={Person} alt="person-img"></img>
      </div>
      <StyledText>
        <p>small_black_monkey</p>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </div>
      </StyledText>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  margin: 0.5em 0em;

  p {
    margin-bottom: 0;
  }

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 0.5em;

  & > p {
    font-size: 0.8em;
    color: grey;
    margin-left: 0.95em;
  }

  & > div {
    font-size: 0.975em;
    padding: 0.65em 1.125em;
    background: #171726;
    border-radius: 24px;
  }
`;

export default Message;
