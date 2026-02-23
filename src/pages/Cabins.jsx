import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import Table, { Td } from "../ui/Table";

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

      <Table
        columns={["Name", "Capacity", "Price", "Discount"]}
        data={cabins}
        render={(cabin) => (
          <tr key={cabin.id}>
            <Td>{cabin.name}</Td>
            <Td>{cabin.maxCapacity}</Td>
            <Td>₹{cabin.regularPrice}</Td>
            <Td>{cabin.discount}</Td>
          </tr>
        )}
      />
    </div>
  );
}

export default Cabins;