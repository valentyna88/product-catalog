import { formatCurrency } from "../../../shared/lib/formatCurrency";
import type { Product } from "../model/types";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-gray-500">{product.category}</p>

        <h3 className="mt-1 min-h-11 line-clamp-2 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-auto pt-3 font-bold text-gray-900">
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
