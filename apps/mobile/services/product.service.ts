import type { Product } from "@/components/product/product-card";

export interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

class ProductService {
  async fetchProducts({ skip, limit }: { skip: number; limit: number }) {
    try {
      const query = {
        skip: skip?.toString() || "0",
        limit: limit?.toString() || "10",
      };

      const url = new URL("https://dummyjson.com/products");

      url.search = new URLSearchParams(query).toString();

      // Make the fetch request
      const res = await fetch(url);
      const data = (await res.json()) as ProductResponse;

      return data;
    } catch (error) {
      return null;
    }
  }

  async fetchProduct(id: string) {
    try {
      const url = new URL(`https://dummyjson.com/products/${id}`);

      const res = await fetch(url);
      const data = (await res.json()) as Product;

      return data;
    } catch (error) {
      return null;
    }
  }
}

export const productService = new ProductService();
