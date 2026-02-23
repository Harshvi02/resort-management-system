import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCabins } from "../services/apiCabins";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
`;

function Cabins() {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchCabins() {
      const data = await getCabins();
      setCabins(data);
      setIsLoading(false);
    }

    fetchCabins();
  }, []);

  if (isLoading) return <p>Loading cabins...</p>;

  return (
    <div>
      <h1>Cabins</h1>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Capacity</Th>
            <Th>Price</Th>
            <Th>Discount</Th>
          </tr>
        </thead>
        <tbody>
          {cabins.map((cabin) => (
            <tr key={cabin.id}>
              <Td>{cabin.name}</Td>
              <Td>{cabin.maxCapacity}</Td>
              <Td>₹{cabin.regularPrice}</Td>
              <Td>{cabin.discount}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cabins;