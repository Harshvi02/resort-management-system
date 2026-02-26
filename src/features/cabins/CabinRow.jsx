import { Td } from "../../ui/Table";
import { useDeleteCabin } from "./useDeleteCabin";

 function CabinRow({ cabin, onEdit }) {
  const { deleteCabinMutation } = useDeleteCabin();

  return (
    <tr key={cabin.id}>
      <Td>{cabin.name}</Td>
      <Td>{cabin.maxCapacity}</Td>
      <Td>₹{cabin.regularPrice}</Td>
      <Td>
        {cabin.discount > 0 ? `₹${cabin.discount}` : "-"}
      </Td>
       <Td>
  <button
    style={{
      background: "#3b82f6",
      color: "white",
      border: "none",
      padding: "4px 10px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
    onClick={onEdit}
  >
    Edit
  </button>
</Td>

      <Td>
        <button
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "4px 10px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
         onClick={() => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this cabin?"
  );

  if (confirmDelete) {
    deleteCabinMutation.mutate(cabin.id);
  }
}}
        >
          Delete
        </button>
      </Td>
    </tr>
  );
}

export default CabinRow;