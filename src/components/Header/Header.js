import styled from "styled-components";

import { Form, FormControl, Button } from "react-bootstrap";

import person from "../../assets/jpg/person.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <StyledInfo>
        <h2>Hi Tuan Thanh</h2>
        <p>Welcome back, I'm so excited you chose us!</p>
      </StyledInfo>

      <StyledTool>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search..."
            className="mr-sm-2"
          />
        </Form>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
          </svg>
        </Button>

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
`;

const StyledInfo = styled.div`
  p {
    color: rgb(150, 150, 150);
  }
`;
const StyledTool = styled.div`
  display: flex;

  input {
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
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
`;

export default Header;
