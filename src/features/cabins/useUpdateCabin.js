import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin } from "../../services/apiCabins";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabinMutation, isLoading } = useMutation({
    mutationFn: ({ id, data }) => updateCabin(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });

  return { updateCabinMutation, isLoading };
}