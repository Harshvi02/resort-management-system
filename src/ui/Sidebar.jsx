import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
const StyledSidebar = styled.aside`
  background-color: #ffffff;
  padding: 2.4rem;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (<StyledSidebar>
     <Logo />
     <MainNav />
  </StyledSidebar>
  );
}

export default Sidebar;
