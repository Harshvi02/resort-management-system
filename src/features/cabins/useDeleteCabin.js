import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabinMutation, isLoading } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });

  return { deleteCabinMutation, isLoading };
}