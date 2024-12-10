import { ScrollView, Text, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/common/header";

import { CategoriesList } from "@/components/product/categories-list";

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

        <View className="p-4 m-4 bg-pink-500 h-80">
          <Text className="text-5xl text-white ">50% Off</Text>
        </View>

        <View className="p-4 m-4 bg-pink-500 h-80">
          <Text className="text-5xl text-white ">50% Off</Text>
        </View>

        <View className="p-4 m-4 bg-pink-500 h-80">
          <Text className="text-5xl text-white ">50% Off</Text>
        </View>
      </ScrollView>
    </>
  );
}
