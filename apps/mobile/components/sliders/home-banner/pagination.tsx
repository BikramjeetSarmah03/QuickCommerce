import { Dimensions, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import type { Banner } from "./banner-item";

import { cn } from "@/lib/utils";

const { width } = Dimensions.get("screen");

interface PaginationProps {
  items: Banner[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
}

export default function Pagination({
  items,
  paginationIndex,
  scrollX,
}: PaginationProps) {
  return (
    <View className="justify-center flex-row h-[40] items-center gap-2">
      {items.map((item, index) => {
        const pgAnimatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 20, 8],
            Extrapolation.CLAMP,
          );

          return {
            width: dotWidth,
          };
        });

        return (
          <Animated.View
            key={item.id}
            className={cn(
              "w-3 h-3 rounded-full",
              paginationIndex === index ? "bg-black" : "bg-gray-300",
            )}
            style={[pgAnimatedStyle]}
          />
        );
      })}
    </View>
  );
}
