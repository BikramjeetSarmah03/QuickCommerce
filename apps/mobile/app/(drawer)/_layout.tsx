import { Drawer } from "expo-router/drawer";

import { Sidebar } from "@/components/common/sidebar";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
      }}
      backBehavior="history"
    />
  );
}
