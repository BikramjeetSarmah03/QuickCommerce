import "../global.css";

import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { PortalHost } from "@rn-primitives/portal";
import { SafeAreaProvider } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />

        <Stack.Screen name="(drawer)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" hidden />

      <PortalHost />
    </SafeAreaProvider>
  );
}
