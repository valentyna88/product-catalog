import { useParams, Link } from "react-router-dom";
import { mockProducts } from "../features/products/model/mockProducts";
import { formatCurrency } from "../shared/lib/formatCurrency";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-gray-700">Product not found.</p>
        <Link
          to="/products"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/products" className="text-blue-600 hover:underline">
        ← Back to products
      </Link>

      <div className="mt-6 overflow-hidden rounded-xl border bg-white">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-72 w-full object-cover"
          loading="lazy"
        />

        <div className="p-6">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="mt-1 text-2xl font-semibold text-gray-900">
            {product.title}
          </h1>

          <p className="mt-3 text-lg font-bold text-gray-900">
            {formatCurrency(product.price)}
          </p>

          {product.description && (
            <p className="mt-4 text-gray-700">{product.description}</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
