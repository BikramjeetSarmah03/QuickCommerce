import { useLayoutEffect, useState } from "react";
import { FlatList, View } from "react-native";

import {
  type ProductResponse,
  productService,
} from "@/services/product.service";

import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

interface ProductListProps {
  skip?: number;
  limit?: number;
  className?: string;
}

export const ProductList = ({ skip, limit, className }: ProductListProps) => {
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
    <View className={cn("p-4", className)}>
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
