import styled from "styled-components";

const StyledTable = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow-x: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const StyledInnerTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    transition: background-color 0.2s;
  }

  tbody tr:hover {
    background-color: #f3f4f6;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 1.4rem;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1.4rem;
  border-bottom: 1px solid #e5e7eb;
`;

function Table({ columns, data, render }) {
  return (
    <StyledTable>
      <StyledInnerTable>
        <thead>
          <tr>
            {columns.map((col) => (
              <Th key={col}>{col}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(render)}
        </tbody>
      </StyledInnerTable>
    </StyledTable>
  );
}

export { Td };
export default Table;