import styled from "styled-components";
import { useHistory } from "react-router-dom";

import person from "../../assets/jpg/person.jpg";

const Header = () => {
  const history = useHistory();

  return (
    <StyledHeader>
      <StyledInfo>
        <h2>Hi Tuan Thanh</h2>
        <p>Welcome back, I'm so excited you chose us!</p>
      </StyledInfo>

      <StyledTool>
        <form>
          <input type="text" placeholder="Search..." className="mr-sm-2" />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
            </svg>
          </button>
        </form>

        <button
          onClick={() => {
            history.push("/create-room");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        </button>

        <img src={person} alt="usr-img"></img>
      </StyledTool>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    margin: 2em 0em;

    padding: 1.5em 0.5em;
    height: auto;

    border: 1px solid #373759;
    background: #27273f;
    border-radius: 40px;
  }
`;

const StyledInfo = styled.div`
  * {
    margin-bottom: 0px;
  }

  p {
    color: rgb(150, 150, 150);
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.925em;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 0.75em;
  }
`;
const StyledTool = styled.div`
  display: flex;
  align-items: center;

  input {
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    color: white;
  }

  button {
    background: none;
    border: none;
    :hover {
      background: none;
    }
  }

  svg {
    fill: white;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 0.75em;
  }

  @media (max-width: 1000px) {
    svg {
      width: 18px;
      height: 18px;
    }

    img {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default Header;
