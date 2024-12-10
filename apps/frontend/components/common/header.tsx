import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ProfileDropdown } from "@/components/user/profile-dropdown";

export function Header() {
  return (
    <View
      className="flex-row items-center justify-between w-full p-4 mb-2 bg-white border-b border-gray-100 shadow-[0px_0px_10px]"
      style={[{ paddingTop: (StatusBar.currentHeight || 0) + 10 }]}
    >
      <Ionicons name="menu" size={24} />

      <View className="flex-row items-center gap-2">
        <Image source={require("@/assets/images/logo.png")} />
        <Text className="text-2xl font-semibold">QC</Text>
      </View>

      <ProfileDropdown />
    </View>
  );
}
