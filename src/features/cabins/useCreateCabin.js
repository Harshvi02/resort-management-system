import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useCreateCabin() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCabin,
   onSuccess: () => {
  toast.success("Cabin created successfully");
  queryClient.invalidateQueries({ queryKey: ["cabins"] });
},
onError: () => {
      toast.error("Something went wrong while creating cabin");
    },
  });

  return {
    createCabinMutation: mutation,
  };
}