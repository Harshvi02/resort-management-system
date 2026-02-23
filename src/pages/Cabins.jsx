import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";

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
      <ul>
        {cabins.map((cabin) => (
          <li key={cabin.id}>
            {cabin.name} - ₹{cabin.regularPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cabins;