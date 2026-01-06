import { mockProducts } from "../model/mockProducts";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
        Products
      </h2>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {mockProducts.map((p) => (
          <li key={p.id} className="h-full">
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
