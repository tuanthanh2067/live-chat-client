import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner animation="border" role="status" as="span">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;
