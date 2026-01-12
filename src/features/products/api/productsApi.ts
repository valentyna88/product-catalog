import { request } from "../../../shared/api/http";
import type { Product } from "../model/types";

const BASE_URL = "https://dummyjson.com";

type DummyProduct = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  description?: string;
  images?: string[];
};

type DummyProductsResponse = {
  products: DummyProduct[];
};
const mapProduct = (p: DummyProduct): Product => ({
  id: String(p.id),
  title: p.title,
  price: p.price,
  category: p.category,
  thumbnail: p.thumbnail,
  description: p.description,
  images: p.images,
});

export async function fetchProducts(): Promise<Product[]> {
  const data = await request<DummyProductsResponse>(`${BASE_URL}/products`);
  return data.products.map(mapProduct);
}

export async function fetchProductById(id: string): Promise<Product> {
  const data = await request<DummyProduct>(`${BASE_URL}/products/${id}`);
  return mapProduct(data);
}
