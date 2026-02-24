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

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
`;


function Sidebar({ isOpen }) {
  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
export default Sidebar;
