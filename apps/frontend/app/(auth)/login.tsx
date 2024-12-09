import useAuthStore from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { View } from "react-native";

import * as React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const router = useRouter();

  const handleLogin = () => {
    setAuth(true);

    router.replace("/");
  };

  const { setColorScheme } = useColorScheme();

  return (
    <View className="justify-center flex-1 ">
      <Text>Hey Login Screen</Text>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Text>Open</Text>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 native:w-72">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onPress={() => setColorScheme("dark")}>
              <Text>Dark</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => setColorScheme("light")}>
              <Text>Light</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => setColorScheme("system")}>
              <Text>System</Text>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button onPress={handleLogin}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}
