import { useProductsQuery } from "../queries/productsQueries";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { data, isLoading, isError, error } = useProductsQuery();

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
        <li key={p.id}>
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
