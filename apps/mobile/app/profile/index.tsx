import { View, Text, ScrollView } from "react-native";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Header from "@/components/common/header";

export default function Profile() {
  return (
    <View>
      <Header
        leftHeader={{
          icon: "cart-outline",
          link: "/cart",
        }}
      />

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
