import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../api/productsApi";

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
  return useQuery({
    queryKey: productsKeys.detail(id),
    queryFn: () => fetchProductById(id),
    enabled: Boolean(id),
  });
}
