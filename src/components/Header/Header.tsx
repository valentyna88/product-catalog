import { useCartStore } from "../../features/cart/model/cartStore";

function Header() {
  const totalItems = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <h1 className="text-xl font-semibold text-gray-800">Product Catalog</h1>

        <div className="text-sm font-medium text-gray-700">
          Cart{totalItems > 0 && ` ${totalItems}`}
        </div>
      </div>
    </header>
  );
}

export default Header;
