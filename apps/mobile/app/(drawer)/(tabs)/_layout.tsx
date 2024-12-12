import { Tabs, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import useAuthStore from "@/hooks/useUser";

export default function TabLayout() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    setIsMounted(true); // Mark the layout as mounted
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isMounted) {
      if (!isAuth) {
        router.replace("/(auth)/login"); // Redirect only after mounting
      }
    }
  }, [isMounted, isAuth]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          paddingBottom: 10,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={"cart-outline"}
              size={28}
              color={color}
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: focused ? color : "white",
                color: focused ? "white" : "black",
                borderRadius: 50,
                padding: 16,
                elevation: 5,
                width: 60,
                height: 60,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
