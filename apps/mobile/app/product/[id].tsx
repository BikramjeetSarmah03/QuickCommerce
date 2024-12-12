import { Ionicons } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { View, Pressable, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Rating } from "react-native-ratings";

import type { Product } from "@/components/product/product-card";

import { productService } from "@/services/product.service";
import { Button } from "@/components/ui/button";

export default function SingleProduct() {
  const safeAreaInset = useSafeAreaInsets();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const { id } = useLocalSearchParams();

  useMemo(() => {
    (async () => {
      setLoading(true);

      const res = await productService.fetchProduct(id as string);

      setProduct(res);

      setLoading(false);
    })();
  }, [id]);

  const goBack = () => {
    router.back();
  };

  const { price, discountPercentage } = product || {};

  const discountedPrice =
    (product?.price || 0) -
    ((product?.price || 0) * (product?.discountPercentage || 0)) / 100;

  return (
    <View className="flex-1" style={{ paddingTop: safeAreaInset.top + 10 }}>
      <View className="flex-row justify-between px-4 pb-2 border-b border-gray-300">
        <Pressable onPress={goBack}>
          <Ionicons name="chevron-back" size={24} />
        </Pressable>

        <Link href={"/cart"}>
          <Ionicons name="cart-outline" size={24} />
        </Link>
      </View>
      <ScrollView>
        <View className="p-4">
          {loading ? (
            <View>
              <Text className="text-3xl">Loading..</Text>
            </View>
          ) : product ? (
            <View className="mt-4">
              <View className="relative">
                <Image
                  src={product.images[0]}
                  style={{ objectFit: "contain", height: 300 }}
                  className="overflow-hidden bg-gray-200 border border-gray-300 rounded-md"
                />
              </View>

              <View className="gap-2 mt-4">
                <View className="flex-row justify-between mr-2">
                  <Text className="text-xl font-semibold">{product.brand}</Text>
                  <Text className="text-xl font-semibold capitalize">
                    {product.category}
                  </Text>
                </View>
                <Text className="text-3xl">{product.title}</Text>

                <Text className="text-xl text-gray-500">
                  {product.description}
                </Text>

                <View className="flex-row items-center gap-2">
                  <Rating
                    ratingCount={5}
                    startingValue={product.rating}
                    readonly
                    imageSize={20}
                    tintColor="#f3f4f6"
                  />

                  <Text className="ml-1 text-gray-500" style={{ fontSize: 16 }}>
                    ({product.reviews.length})
                  </Text>
                </View>

                <View className="flex-row items-end gap-2">
                  <Text className="font-semibold" style={{ fontSize: 24 }}>
                    ${discountedPrice.toFixed(2)}
                  </Text>
                  <Text
                    className="mb-0.5 font-semibold text-gray-400 line-through"
                    style={{ fontSize: 18 }}
                  >
                    ${price?.toFixed(2)}
                  </Text>
                  <Text
                    className=" font-semibold text-green-500 mb-0.5"
                    style={{ fontSize: 18 }}
                  >
                    ({discountPercentage}% off)
                  </Text>
                </View>
                <Button>
                  <Text className="text-white">Buy Now</Text>
                </Button>
              </View>
            </View>
          ) : (
            <View>
              <Text>Product Not Found</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
