import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const safeAreaInset = useSafeAreaInsets();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={{ paddingTop: safeAreaInset.top + 10 }}>
      <View className="flex-row justify-between px-4 pb-2 border-b border-gray-300">
        <Pressable onPress={goBack}>
          <Ionicons name="chevron-back" size={24} />
        </Pressable>

        <Text className="text-xl">Profile</Text>

        <Link href={"/cart"}>
          <Ionicons name="cart-outline" size={24} />
        </Link>
      </View>

      <ScrollView>
        <View className="items-center justify-center mt-4">
          <View className="w-40 h-40 bg-red-500 rounded-full" />
        </View>

        <View className="p-4">
          <Text className="text-2xl font-semibold">Personal Details</Text>

          <View className="gap-2 mt-4">
            <View>
              <Label>Name</Label>
              <Input placeholder="Name" />
            </View>
            <View>
              <Label>Email Address</Label>
              <Input placeholder="Email" />
            </View>
            <View>
              <Label>Password</Label>
              <Input placeholder="Password" />
            </View>
          </View>
        </View>

        <View className="p-4 mb-12">
          <Text className="text-2xl font-semibold">Address</Text>

          <View className="gap-2 mt-4 ">
            <View>
              <Label>Address</Label>
              <Input placeholder="Address" />
            </View>
            <View>
              <Label>Pincode</Label>
              <Input placeholder="Pincode" />
            </View>
            <View>
              <Label>Country</Label>
              <Input placeholder="Country" />
            </View>
            <View>
              <Label>State</Label>
              <Input placeholder="State" />
            </View>
            <View>
              <Label>City</Label>
              <Input placeholder="City" />
            </View>
          </View>

          <Button className="mt-4">
            <Text className="text-white">Save Changes</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
