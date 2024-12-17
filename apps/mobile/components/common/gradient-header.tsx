import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions, type ParamListBase } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ProfileDropdown } from "@/components/user/profile-dropdown";
import { SearchProduct } from "../product/search";

export function GradientHeader() {
  const safeAreaInset = useSafeAreaInsets();

  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <LinearGradient colors={["#ef4444", "#f3f4f6"]}>
      <View
        className="p-4 mb-2 native:pb-4"
        style={[{ paddingTop: safeAreaInset.top + 2 }]}
      >
        <View className="flex-row items-center justify-between w-full pb-4">
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons name="menu-outline" size={30} />
          </TouchableOpacity>

          <View className="flex-row items-center gap-2">
            <Image source={require("@/assets/images/logo.png")} />
            <Text className="text-2xl font-semibold">QC</Text>
          </View>

          <ProfileDropdown />
        </View>
        <SearchProduct />
      </View>
    </LinearGradient>
  );
}
