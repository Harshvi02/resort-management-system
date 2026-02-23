import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  list-style: none;
  margin-top: 30px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px 15px;
  margin-bottom: 8px;
  text-decoration: none;
  color: #374151;
  border-radius: 6px;

  &.active {
    background-color: #2563eb;
    color: white;
  }

  &:hover {
    background-color: #e5e7eb;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">Cabins</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">Bookings</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/guests">Guests</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">Settings</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;