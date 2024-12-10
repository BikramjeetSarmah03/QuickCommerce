import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchProductProps {
  className?: string;
}

export const SearchProduct = ({ className }: SearchProductProps) => {
  return (
    <View className={cn("relative", className)}>
      <Ionicons
        name="search"
        size={24}
        color={"#d1d5db"}
        className="absolute z-10 w-8 top-2 left-2"
      />
      <Input
        placeholder="Search any product"
        className="pl-10 placeholder:text-gray-400"
      />
    </View>
  );
};
