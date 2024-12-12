import { View, Text, Dimensions, Image } from "react-native";
import { Rating } from "react-native-ratings";
import { Button } from "../ui/button";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };
  barcode: string;
  qrCode: string;
  images: string[];
  thumbnail: string;
};

interface ProductCardProps {
  product: Product;
}

const { width } = Dimensions.get("screen");

export const ProductCard = ({ product }: ProductCardProps) => {
  const { price, discountPercentage } = product;

  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <View
      className="p-2 bg-white border border-gray-200 rounded-md"
      style={[{ width: width / 1.5, height: 300 }]}
    >
      <View className="relative">
        <Image
          src={product.images[0]}
          className="h-36"
          style={{ objectFit: "contain" }}
        />

        <View className="absolute right-0 flex-row items-center top-5">
          <Rating
            ratingCount={5}
            startingValue={product.rating}
            readonly
            imageSize={12}
            style={{}}
          />

          <Text className="ml-1 text-gray-500" style={{ fontSize: 12 }}>
            ({product.reviews.length})
          </Text>
        </View>
      </View>

      <View className="gap-1">
        <Text className="text-xl font-semibold">{product.title}</Text>
        <Text className="text-sm">{product.description.slice(0, 30)}...</Text>

        <View className="flex-row items-end gap-2">
          <Text
            className="font-semibold text-green-500"
            style={{ fontSize: 18 }}
          >
            ${discountedPrice.toFixed(2)}
          </Text>
          <Text
            className="mb-0.5 font-semibold text-gray-400 line-through"
            style={{ fontSize: 12 }}
          >
            ${price.toFixed(2)}
          </Text>
          <Text
            className=" font-semibold text-red-500 mb-0.5"
            style={{ fontSize: 12 }}
          >
            ({discountPercentage}% off)
          </Text>
        </View>

        <Button className="mt-3">
          <Text className="text-white">Buy Now</Text>
        </Button>
      </View>
    </View>
  );
};
