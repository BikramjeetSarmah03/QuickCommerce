import { Tabs, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Simulate authentication status
  const isLoggedIn = false; // Replace with actual auth logic

  useEffect(() => {
    setIsMounted(true); // Mark the layout as mounted
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (!isLoggedIn) {
        router.replace("/(auth)/login"); // Redirect only after mounting
      }
    }
  }, [isMounted, isLoggedIn]);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="paper-plane" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
