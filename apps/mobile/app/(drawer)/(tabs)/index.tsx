import { ScrollView, Text, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/common/header";

import { CategoriesList } from "@/components/product/categories-list";
import { HomeBannerSlider } from "@/components/sliders/home-banner";
import { ProductList } from "@/components/product/product-list";

export default function HomeScreen() {
  return (
    <>
      <Header />

      <ScrollView>
        <View className="flex-row items-center justify-between p-4">
          <Text className="flex-1 text-2xl font-semibold">All Featured</Text>

          <View className="flex-row justify-end flex-1 gap-2">
            <Button variant={"outline"} size={"sm"} className="flex-row">
              <Ionicons
                name="swap-vertical-outline"
                size={16}
                className="mr-2"
              />
              <Text className="text-sm">Sort</Text>
            </Button>
            <Button variant={"outline"} size={"sm"} className="flex-row">
              <FontAwesome name="filter" size={16} className="mr-2" />
              <Text className="text-sm">Filter</Text>
            </Button>
          </View>
        </View>

        <CategoriesList />

        <HomeBannerSlider />

        <ProductList limit={5} />

        <ProductList skip={25} limit={5} />
      </ScrollView>
    </>
  );
}
