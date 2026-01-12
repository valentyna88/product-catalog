import { useParams, Link } from "react-router-dom";
import { formatCurrency } from "../shared/lib/formatCurrency";
import { useProductQuery } from "../features/products/queries/productsQueries";

function ProductDetailsPage() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useProductQuery(id ?? "");

  if (isLoading) return <div className="py-8">Loading...</div>;

  if (isError) {
    return (
      <div className="py-8 text-red-600">
        Failed to load product: {(error as Error).message}
      </div>
    );
  }

  if (!product) {
    return (
      <>
        <p className="text-gray-700">Product not found.</p>
        <Link
          to="/products"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Back to products
        </Link>
      </>
    );
  }

  return (
    <>
      <Link
        to="/products"
        className="rounded text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        ← Back to products
      </Link>

      <div className="mt-6 mx-auto max-w-3xl overflow-hidden rounded-xl border bg-white lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-72 w-full object-cover lg:h-full"
          loading="lazy"
        />

        <div className="flex flex-col p-6">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="mt-1 text-2xl font-semibold text-gray-900">
            {product.title}
          </h1>

          {product.description && (
            <p className="mt-4 text-gray-700">{product.description}</p>
          )}

          <p className="mt-auto pt-3 text-lg font-bold text-gray-900">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
