import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  margin-top: 30px;
`;

const NavItem = styled.li`
  margin-bottom: 15px;
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <NavItem>Dashboard</NavItem>
        <NavItem>Cabins</NavItem>
        <NavItem>Bookings</NavItem>
        <NavItem>Guests</NavItem>
        <NavItem>Settings</NavItem>
      </NavList>
    </nav>
  );
}

export default MainNav;
