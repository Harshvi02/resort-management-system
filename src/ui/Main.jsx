import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledMain = styled.main`
  padding: 3.2rem 4rem;
  background-color: #f9fafb;
  overflow-y: auto; 
  height: 100vh;   
  @media (max-width: 768px) {
     padding: 1.6rem;
  }
`;

function Main() {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
}


export default Main;
