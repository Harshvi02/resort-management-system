import { useState } from "react";
import styled from "styled-components";

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
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
`;

function CreateCabinForm({ onSubmitCabin, editingCabin, isWorking }){
  const [formData, setFormData] = useState(
  editingCabin || {
    name: "",
    maxCapacity: "",
    regularPrice: "",
    discount: "",
    description: "",
  }
);

 function handleSubmit(e) {
    e.preventDefault();

    const formattedData = {
      ...formData,
      maxCapacity: Number(formData.maxCapacity),
      regularPrice: Number(formData.regularPrice),
      discount: Number(formData.discount || 0),
    };

    onSubmitCabin(formattedData);
  }

  return (
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

      <Button type="submit" disabled={isWorking}>
  {isWorking
    ? editingCabin
      ? "Updating..."
      : "Saving..."
    : editingCabin
    ? "Update Cabin"
    : "Save Cabin"}
</Button>
    </Form>
  );
}

export default CreateCabinForm;