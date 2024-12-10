import * as React from "react";
import { View } from "react-native";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Text } from "@/components/ui/text";

import LogoutButton from "@/components/auth/logout-button";
import { Ionicons } from "@expo/vector-icons";

const GITHUB_AVATAR_URI =
  "https://avatars.githubusercontent.com/u/83879699?v=4&size=64";

export const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <View>
          <Avatar alt="Zach Nugent's Avatar">
            <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
        </View>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 native:w-60">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Text>Welcome Bikram</Text>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <LogoutButton>
            <Ionicons name="log-out-outline" size={24} className="w-7" />
            <Text>Log out</Text>
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
