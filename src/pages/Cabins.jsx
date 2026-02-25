import CabinsTable from "../features/cabins/CabinsTable";
import { useCabins } from "../features/cabins/useCabins";

function Cabins() {
  const { data: cabins = [], isLoading, error } = useCabins();

  if (isLoading) return <p>Loading cabins...</p>;
  if (error) return <p>Error loading cabins</p>;

  return (
    <div>
      <h1>Cabins</h1>
      <CabinsTable cabins={cabins} />
    </div>
  );
}

export default Cabins;