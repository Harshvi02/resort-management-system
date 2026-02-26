import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, data }) => updateCabin(id, data),
    onSuccess: () => {
  toast.success("Cabin updated successfully");
  queryClient.invalidateQueries({ queryKey: ["cabins"] });
},
 onError: () => {
    toast.error("Something went wrong while updating cabin");
  },
  
  });

  return {
    updateCabinMutation: mutation,
  };
}