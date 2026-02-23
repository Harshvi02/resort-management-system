import styled from "styled-components";
import Sidebar from "./Sidebar";
import Main from "./Main";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main />
    </StyledAppLayout>
  );
}

export default AppLayout;