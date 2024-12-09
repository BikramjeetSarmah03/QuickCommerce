import "../global.css";

import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { PortalHost } from "@rn-primitives/portal";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />

        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" hidden />

      <PortalHost />
    </>
  );
}
