import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <div>Sidebar</div>
      <div>Main Content</div>
    </StyledAppLayout>
  );
}

export default AppLayout;
