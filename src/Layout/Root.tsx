import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Root = () => {
  return (
    <LayoutDiv>
      <h1>hello world</h1>
      <Outlet />
    </LayoutDiv>
  );
};

export default Root;

const LayoutDiv = styled.div`
  background-color: #181828;
  width: 100%;
  height: 100%;
`;