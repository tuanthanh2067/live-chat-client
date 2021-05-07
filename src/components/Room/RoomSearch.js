import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import RoomShowcase from "./RoomShowcase";

export default function RoomSearch() {
  const location = useLocation();
  const query = queryString.parse(location.search);

  return <div></div>;
}
