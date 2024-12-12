import { View, type ViewabilityConfig, type ViewToken } from "react-native";
import Animated from "react-native-reanimated";
import { useRef, useState } from "react";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { BannerItem } from "./banner-item";
import Pagination from "./pagination";

export const HomeBannerSlider = () => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: { viewableItems: ViewToken[] }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig,
      onViewableItemsChanged,
    },
  ]);

  return (
    <View>
      <Animated.FlatList
        data={banners}
        renderItem={({ item, index }) => (
          <BannerItem
            id={item.id}
            title={item.title}
            buttonText={item.buttonText}
            description={item.description}
            image={item.image}
            key={index}
          />
        )}
        horizontal
        showsVerticalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination
        items={banners}
        paginationIndex={paginationIndex}
        scrollX={scrollX}
      />
    </View>
  );
};

const banners = [
  {
    id: 1,
    image: require("@/assets/images/home_banner.jpg"),
    title: "50% Off",
    description: ["Now in (product)", "All colors"],
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: require("@/assets/images/home_banner.jpg"),
    title: "New Arrivals",
    description: ["Explore our latest collection", "Limited time only"],
    buttonText: "Discover",
  },
  {
    id: 3,
    image: require("@/assets/images/home_banner.jpg"),
    title: "Winter Sale",
    description: ["Up to 70% Off", "Stay warm, stay stylish"],
    buttonText: "Start Shopping",
  },
];
