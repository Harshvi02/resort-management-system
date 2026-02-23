import styled from "styled-components";
import { Outlet } from "react-router-dom";
const StyledMain = styled.main`
  padding: 20px;
`;


function Main() {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
}


export default Main;
