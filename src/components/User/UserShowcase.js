import Loading from "../Loading/Loading";
import styled from "styled-components";

import MinimalProfile from "../Profile/MinimalProfile";
import Pagination from "../Pagination/Pagination";

export default function UserShowcase({
  loading,
  users,
  previousHandler,
  nextHandler,
  page,
}) {
  let content;

  if (loading === true) {
    content = <Loading />;
  } else {
    content = (
      <>
        <StyledUsers>
          {users.length !== 0 ? (
            users.map((user, idx) => (
              <MinimalProfile key={idx} profile={user} />
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                color: "grey",
                marginTop: "2em",
                fontSize: "2em",
                fontWeight: "bold",
              }}
            >
              No more users to show
            </div>
          )}
        </StyledUsers>

        <Pagination
          previousHandler={previousHandler}
          nextHandler={nextHandler}
          page={page}
        />
      </>
    );
  }

  return <StyledShowcase>{content}</StyledShowcase>;
}

const StyledShowcase = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledUsers = styled.div`
  width: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1.5em;
`;
