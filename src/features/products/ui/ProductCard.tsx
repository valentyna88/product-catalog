import { Link } from "react-router-dom";
import { formatCurrency } from "../../../shared/lib/formatCurrency";
import type { Product } from "../model/types";
import { useCartStore } from "../../cart/model/cartStore";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition will-change-transform md:hover:-translate-y-0.5  md:hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
      <Link
        to={`/products/${product.id}`}
        aria-label={`View details: ${product.title}`}
        className="absolute inset-0 z-0 focus:outline-none"
      />
      <img
        src={product.imageUrl}
        alt={product.title}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />

      <div className="relative z-10 flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-gray-500">{product.category}</p>

        <h3 className="mt-1 min-h-11 line-clamp-2 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <div className="mt-auto flex items-end justify-between pt-3">
          <p className="font-bold text-gray-900">
            {formatCurrency(product.price)}
          </p>

          <div className="relative z-20 flex gap-2">
            <button
              type="button"
              className="rounded-md border px-2 py-1 text-xs font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={() => {
                addItem({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  imageUrl: product.imageUrl,
                });
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
