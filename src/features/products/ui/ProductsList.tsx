import { useQueryClient } from "@tanstack/react-query";
import { productsKeys, useProductsQuery } from "../queries/productsQueries";
import ProductCard from "./ProductCard";
import { fetchProductById } from "../api/productsApi";

function ProductsList() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useProductsQuery();

  const prefetchProduct = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: productsKeys.detail(id),
      queryFn: () => fetchProductById(id),
      staleTime: 5 * 60 * 1000,
    });
  };

  if (isLoading) return <div className="py-8">Loading...</div>;

  if (isError) {
    return (
      <div className="py-8 text-red-600">
        Failed to load products: {(error as Error).message}
      </div>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data!.map((p) => (
        <li
          key={p.id}
          onMouseEnter={() => prefetchProduct(p.id)}
          onFocus={() => prefetchProduct(p.id)}
        >
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
