import { useCartStore } from "../features/cart/model/cartStore";
import ProductsList from "../features/products/ui/ProductsList";

function ProductsPage() {
  const totalItems = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  console.log("Total items:", totalItems);
  return <ProductsList />;
}

export default ProductsPage;
