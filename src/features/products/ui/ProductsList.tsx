import { mockProducts } from "../model/mockProducts";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900">Products</h2>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((p) => (
          <li key={p.id}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
