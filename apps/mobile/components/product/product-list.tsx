import { useLayoutEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { ProductCard, type Product } from "./product-card";

interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

interface ProductListProps {
  skip?: number;
  limit?: number;
}

export const ProductList = ({ skip, limit }: ProductListProps) => {
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const query = {
          skip: skip?.toString() || "0",
          limit: limit?.toString() || "10",
        };

        const url = new URL("https://dummyjson.com/products");

        url.search = new URLSearchParams(query).toString();

        // Make the fetch request
        const res = await fetch(url);
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        setProducts(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [limit, skip]);

  return (
    <View className="p-4">
      {!isLoading && products ? (
        <FlatList
          data={products.products}
          renderItem={({ item }) => (
            <ProductCard key={item.id} product={item} />
          )}
          horizontal
          ItemSeparatorComponent={() => <View className="w-2" />}
        />
      ) : null}
    </View>
  );
};
