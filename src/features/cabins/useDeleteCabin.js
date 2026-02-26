import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
  toast.success("Cabin deleted successfully");
  queryClient.invalidateQueries({ queryKey: ["cabins"] });
},
 onError: () => {
    toast.error("Something went wrong while deleting cabin");
  },
  });

  return {
    deleteCabinMutation: mutation,
  };
}