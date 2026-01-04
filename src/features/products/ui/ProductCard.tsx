import type { Product } from "../model/types";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-xs font-medium text-gray-500">{product.category}</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-2 font-bold text-gray-900">${product.price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
