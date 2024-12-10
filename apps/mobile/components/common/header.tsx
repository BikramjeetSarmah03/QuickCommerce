import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions, type ParamListBase } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { ProfileDropdown } from "@/components/user/profile-dropdown";

export function Header() {
  const safeAreaInset = useSafeAreaInsets();

  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View
      className="flex-row items-center justify-between w-full p-4 mb-2 native:pb-4"
      style={[{ paddingTop: safeAreaInset.top + 2 }]}
    >
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
  );
}
