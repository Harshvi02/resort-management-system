import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 1.2rem;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1.2rem;
  border-bottom: 1px solid #e5e7eb;
`;

function Table({ columns, data, render }) {
  return (
    <StyledTable>
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
    </StyledTable>
  );
}

export { Td };
export default Table;