import { Tabs, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import useAuthStore from "@/hooks/useUser";

export default function TabLayout() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    setIsMounted(true); // Mark the layout as mounted
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (!isAuth) {
        router.replace("/(auth)/login"); // Redirect only after mounting
      }
    }
  }, [isMounted, isAuth]);

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
