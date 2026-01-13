import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../api/productsApi";
import type { Product } from "../model/types";

export const productsKeys = {
  all: ["products"] as const,
  lists: () => [...productsKeys.all, "list"] as const,
  details: () => [...productsKeys.all, "detail"] as const,
  detail: (id: string) => [...productsKeys.details(), id] as const,
};

export function useProductsQuery() {
  return useQuery({
    queryKey: productsKeys.lists(),
    queryFn: fetchProducts,
  });
}

export function useProductQuery(id: string) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: productsKeys.detail(id),
    queryFn: () => fetchProductById(id),
    enabled: Boolean(id),

    initialData: () => {
      const list = queryClient.getQueryData<Product[]>(productsKeys.lists());
      return list?.find((p) => p.id === id);
    },

    initialDataUpdatedAt: () => {
      const state = queryClient.getQueryState(productsKeys.lists());
      return state?.dataUpdatedAt;
    },

    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}
