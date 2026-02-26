import styled from "styled-components";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  min-height: 100vh;
  overflow: hidden; 

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main setIsOpen={setIsOpen} />
    </StyledAppLayout>
  );
}

export default AppLayout;