import type { Product } from "../../features/products/model/types";

const PLACEHOLDER =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">
    <rect width="100%" height="100%" fill="#F3F4F6"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      fill="#9CA3AF" font-family="Arial, sans-serif" font-size="20">
      No image
    </text>
  </svg>
`);

export function getProductImage(
  product: Pick<Product, "thumbnail" | "images">
) {
  return product.thumbnail || product.images?.[0] || PLACEHOLDER;
}

export function getImagePlaceholder() {
  return PLACEHOLDER;
}
