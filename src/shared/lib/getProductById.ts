import { mockProducts } from "../../features/products/model/mockProducts";

export function getProductById(id: string | undefined) {
  if (!id) return undefined;
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return undefined;
  return mockProducts.find((p) => p.id === numericId);
}
