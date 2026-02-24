import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCabins, createCabin, deleteCabin, updateCabin, } from "../services/apiCabins";
import Table, { Td } from "../ui/Table";

const Form = styled.form`
  background: #ffffff;
  padding: 2.4rem;
  border-radius: 8px;
  margin: 2rem 0;
  display: grid;
  gap: 1.6rem;
  max-width: 500px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;
const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 1.4rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;
function Cabins() {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
const [editId, setEditId] = useState(null);
const [formData, setFormData] = useState({
  name: "",
  maxCapacity: "",
  regularPrice: "",
  discount: "",
  description: "",
});
  

  useEffect(function () {
    async function fetchCabins() {
      const data = await getCabins();
      setCabins(data);
      setIsLoading(false);
    }

    fetchCabins();
  }, []);


  async function handleSubmit(e) {
  e.preventDefault();

  if (
    formData.name.trim() === "" ||
    formData.maxCapacity === "" ||
    formData.regularPrice === ""
  ) {
    alert("Please fill all required fields");
    return;
  }

  if (Number(formData.discount) > Number(formData.regularPrice)) {
    alert("Discount cannot be greater than price");
    return;
  }

  // 🔥 EDIT MODE
  if (editId) {
    const data = await updateCabin(editId, {
      ...formData,
      maxCapacity: Number(formData.maxCapacity),
      regularPrice: Number(formData.regularPrice),
      discount: Number(formData.discount || 0),
    });

    setCabins((cabins) =>
      cabins.map((c) => (c.id === editId ? data[0] : c))
    );

    setEditId(null);
  } else {
    // 🔥 CREATE MODE
    const data = await createCabin({
      ...formData,
      maxCapacity: Number(formData.maxCapacity),
      regularPrice: Number(formData.regularPrice),
      discount: Number(formData.discount || 0),
    });

    setCabins((cabins) => [...cabins, ...data]);
  }

  setShowForm(false);

  setFormData({
    name: "",
    maxCapacity: "",
    regularPrice: "",
    discount: "",
    description: "",
  });
} 
  async function handleDelete(id) {
    await deleteCabin(id);

    setCabins((cabins) => cabins.filter((c) => c.id !== id));
  }
  if (isLoading) return <p>Loading cabins...</p>;

  return (
    <div>
      <h1>Cabins</h1>
     <button
  onClick={() => {
    if (showForm) {
      // Closing form
      setEditId(null);
      setFormData({
        name: "",
        maxCapacity: "",
        regularPrice: "",
        discount: "",
        description: "",
      });
    }
    setShowForm((s) => !s);
  }}
>
  {showForm ? "Close" : "Add Cabin"}
</button>
{showForm && (
  
  <Form onSubmit={handleSubmit}>
    <FormRow>
      <Label>Name</Label>
      <Input
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
    </FormRow>

    <FormRow>
      <Label>Max Capacity</Label>
      <Input
        type="number"
        value={formData.maxCapacity}
        onChange={(e) =>
          setFormData({ ...formData, maxCapacity: e.target.value })
        }
      />
    </FormRow>

    <FormRow>
      <Label>Price</Label>
      <Input
        type="number"
        value={formData.regularPrice}
        onChange={(e) =>
          setFormData({ ...formData, regularPrice: e.target.value })
        }
      />
    </FormRow>
    <FormRow>
  <Label>Discount</Label>
  <Input
    type="number"
    value={formData.discount}
    onChange={(e) =>
      setFormData({ ...formData, discount: e.target.value })
    }
  />
</FormRow>
<FormRow>
  <Label>Description</Label>
  <Textarea
    rows="3"
    value={formData.description}
    onChange={(e) =>
      setFormData({ ...formData, description: e.target.value })
    }
  />
</FormRow>

    <Button type="submit">Save Cabin</Button>
  </Form>
)}

      <Table
        columns={["Name", "Capacity", "Price", "Discount", "", ""]}
        data={cabins}
       render={(cabin) => (
  <tr key={cabin.id}>
    <Td>{cabin.name}</Td>
    <Td>{cabin.maxCapacity}</Td>
    <Td>₹{cabin.regularPrice}</Td>
    <Td>
      {cabin.discount > 0 ? (
        <span
          style={{
            background: "#d1fae5",
            color: "#065f46",
            padding: "4px 10px",
            borderRadius: "999px",
            fontWeight: "600",
          }}
        >
          ₹{cabin.discount}
        </span>
      ) : (
        "-"
      )}
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
    onClick={() => {
      setFormData({
        name: cabin.name,
        maxCapacity: cabin.maxCapacity,
        regularPrice: cabin.regularPrice,
        discount: cabin.discount,
        description: cabin.description || "",
      });

      setEditId(cabin.id);
      setShowForm(true);
    }}
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
        onClick={() => handleDelete(cabin.id)}
      >
        Delete
      </button>
    </Td>
  </tr>
)}
      />
    </div>
  );
}


export default Cabins;