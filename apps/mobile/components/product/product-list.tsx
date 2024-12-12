import { useLayoutEffect, useState } from "react";
import { FlatList, View } from "react-native";

import {
  type ProductResponse,
  productService,
} from "@/services/product.service";

import { ProductCard } from "./product-card";

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

      const res = await productService.fetchProducts({
        skip: skip || 0,
        limit: limit || 5,
      });

      if (res) {
        setProducts(res);
      } else {
        setProducts(null);
      }
      setLoading(false);
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
