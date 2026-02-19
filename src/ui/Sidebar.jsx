import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
const StyledSidebar = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #e5e7eb;
`;

function Sidebar() {
  return (<StyledSidebar>
     <Logo />
     <MainNav />
  </StyledSidebar>
  );
}

export default Sidebar;
