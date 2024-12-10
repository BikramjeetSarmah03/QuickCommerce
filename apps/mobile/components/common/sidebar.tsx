import { Ionicons } from "@expo/vector-icons";
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { View } from "react-native";
import { Text } from "../ui/text";

export const Sidebar = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  const isActiveLink = (link: string) => {
    return link === pathname;
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        padding: 0,
        paddingStart: 0,
        paddingEnd: 0,
      }}
    >
      <View className="p-4 border-b border-gray-300 native:pt-0">
        <Text>User Details Box</Text>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        )}
        label={"Home"}
        onPress={() => {
          router.push("/(drawer)/(tabs)");
        }}
        style={{
          backgroundColor: isActiveLink("/") ? "#d1d5db" : "white",
          borderRadius: 0,
          marginTop: 10,
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
        )}
        label={"Wishlist"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/wishlist");
        }}
        style={{
          backgroundColor: isActiveLink("/wishlist") ? "#d1d5db" : "white",
          borderRadius: 0,
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="cart-outline" size={size} color={color} />
        )}
        label={"Cart"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/cart");
        }}
        style={{
          backgroundColor: isActiveLink("/cart") ? "#d1d5db" : "white",
          borderRadius: 0,
        }}
      />
    </DrawerContentScrollView>
  );
};
