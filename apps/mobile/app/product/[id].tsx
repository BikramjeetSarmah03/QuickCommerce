import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Rating } from "react-native-ratings";
import moment from "moment";

import type { Product } from "@/components/product/product-card";

import { productService } from "@/services/product.service";
import { Button } from "@/components/ui/button";
import { ProductList } from "@/components/product/product-list";
import Header from "@/components/common/header";

export default function SingleProduct() {
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

  const { price, discountPercentage } = product || {};

  const discountedPrice =
    (product?.price || 0) -
    ((product?.price || 0) * (product?.discountPercentage || 0)) / 100;

  return (
    <View className="flex-1 pb-4">
      <Header
        leftHeader={{
          link: "/cart",
          icon: "cart-outline",
        }}
      />

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
                  {product.brand && (
                    <Text className="text-xl font-semibold">
                      {product.brand}
                    </Text>
                  )}
                  <View className="flex-row justify-between w-full gap-2">
                    <Text
                      className="font-semibold capitalize "
                      style={{ fontSize: 20 }}
                    >
                      {product.category}
                    </Text>

                    <View className="flex-row gap-2">
                      <Rating
                        ratingCount={5}
                        startingValue={product.rating}
                        readonly
                        imageSize={20}
                        tintColor="#f3f4f6"
                        ratingBackgroundColor="#d1d5db"
                        type="custom"
                        style={{ marginTop: 3 }}
                      />
                      <Text
                        className="text-gray-500"
                        style={{ fontSize: 16, marginTop: 2 }}
                      >
                        ({product.reviews.length})
                      </Text>
                    </View>
                  </View>
                </View>
                <Text className="text-3xl">{product.title}</Text>

                <Text className="text-xl text-gray-500">
                  {product.description}
                </Text>

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

                <View className="flex-row gap-2">
                  <Button variant="outline" size="sm">
                    <Text>Nearest Store</Text>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Text>Vip</Text>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Text>Return Policy</Text>
                  </Button>
                </View>

                <Button variant="outline">
                  <Text>Add to cart</Text>
                </Button>
                <Button>
                  <Text className="text-white">Buy Now</Text>
                </Button>

                <View className="gap-2">
                  {product.reviews.map((review) => (
                    <View
                      key={review.date + review.reviewerEmail}
                      className="gap-3 p-4 bg-white border border-gray-300"
                    >
                      <View className="flex-row justify-between gap-2 pr-2 ">
                        <View>
                          <Text className="text-lg font-semibold">
                            {review.reviewerName}
                          </Text>
                          <Text className="text-xs">
                            {moment(review.date).fromNow()}
                          </Text>
                        </View>
                        <Rating
                          ratingCount={5}
                          startingValue={review.rating}
                          readonly
                          imageSize={14}
                          tintColor="#ffffff"
                          ratingBackgroundColor="#d1d5db"
                          type="custom"
                        />
                      </View>
                      <Text>{review.comment}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <ProductList skip={30} limit={5} className="p-0 mt-4" />
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
