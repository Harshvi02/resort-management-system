import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";
function CabinsTable({ cabins }) {
  const [showForm, setShowForm] = useState(false);
  const [editingCabin, setEditingCabin] = useState(null);
  const { createCabinMutation } = useCreateCabin();
const { updateCabinMutation } = useUpdateCabin();
  return (
    <>
      <button
  onClick={() => {
    setEditingCabin(null);   // 🔥 reset edit mode
    setShowForm((s) => !s);
  }}
  style={{
    marginBottom: "2rem",
    padding: "8px 14px",
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  {showForm ? "Close" : "Add Cabin"}
</button>

      {showForm && (
  <CreateCabinForm
  key={editingCabin?.id || "new"}
  editingCabin={editingCabin}
  isWorking={
    createCabinMutation.isPending ||
    updateCabinMutation.isPending
  }
  onSubmitCabin={(data) => {
  if (editingCabin) {
    updateCabinMutation.mutate(
      { id: editingCabin.id, data },
      {
        onSuccess: () => {
          setEditingCabin(null);
          setShowForm(false);
        },
      }
    );
  } else {
    createCabinMutation.mutate(data, {
      onSuccess: () => {
        setShowForm(false);
      },
    });
  }
}}
/>
)}

      <Table
        columns={["Name", "Capacity", "Price", "Discount", "", ""]}
        data={cabins}
        render={(cabin) => (
  <CabinRow
    cabin={cabin}
    onEdit={() => {
      setEditingCabin(cabin);
      setShowForm(true);
    }}
  />
)}
      />
    </>
  );
}

export default CabinsTable;