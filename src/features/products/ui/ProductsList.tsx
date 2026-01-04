import { mockProducts } from "../model/mockProducts";

function ProductsList() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900">Products</h2>

      <ul className="mt-4 space-y-2">
        {mockProducts.map((p) => (
          <li key={p.id} className="text-gray-700">
            {p.title} - ${p.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
