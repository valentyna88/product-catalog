import { Link } from "react-router-dom";
import { useCartStore } from "../features/cart/model/cartStore";
import { formatCurrency } from "../shared/lib/formatCurrency";
import { useShallow } from "zustand/shallow";

function CartPage() {
  const { items, increase, decrease, removeItem, clear } = useCartStore(
    useShallow((s) => ({
      items: s.items,
      increase: s.increase,
      decrease: s.decrease,
      removeItem: s.removeItem,
      clear: s.clear,
    }))
  );

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <Link
        to="/products"
        className="text-blue-600 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
      >
        ← Back to products
      </Link>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
        </div>

        <button
          type="button"
          onClick={clear}
          disabled={items.length === 0}
          className="cursor-pointer rounded-full border px-3 py-2 text-sm font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Clear cart
        </button>
      </div>

      {items.length === 0 ? (
        <div className="mt-6 rounded-xl bg-white p-6 text-gray-700">
          Your cart is empty.
        </div>
      ) : (
        <div className="mt-6 rounded-xl overflow-hidden bg-white">
          <ul className="divide-y">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 p-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-20 w-28 rounded-md object-cover"
                  loading="lazy"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-gray-900">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    {formatCurrency(item.price)}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border-2 border-yellow-300">
                      <button
                        type="button"
                        onClick={() => decrease(item.id)}
                        disabled={item.quantity === 1}
                        className="h-8 w-8 rounded-l-full cursor-pointer text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span className="inline-flex w-10 justify-center text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increase(item.id)}
                        className="h-8 w-8 rounded-r-full cursor-pointer text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="ml-4 cursor-pointer rounded-full border px-3 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between border-t p-4">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
            >
              ← Continue shopping
            </Link>
            <p className="mt-1 text-sm text-gray-600">
              Total items: <span className="font-medium">{totalItems}</span>
            </p>
            <div>
              <p aria-live="polite" className="text-lg font-bold text-gray-900">
                {formatCurrency(totalPrice)}
              </p>
              <button
                type="button"
                className="mt-2 cursor-pointer rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Place an order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
