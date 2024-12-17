import { Ionicons } from "@expo/vector-icons";
import { type Href, Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  backLink?: Href;
  leftHeader?: {
    link: Href;
    icon: unknown;
  };
  headerText?: string;
}

export default function Header({
  backLink,
  leftHeader,
  headerText,
}: HeaderProps) {
  const safeAreaInset = useSafeAreaInsets();

  function goBack() {
    if (backLink) {
      router.replace(backLink);
    } else {
      router.back();
    }
  }

  return (
    <View
      style={{ paddingTop: safeAreaInset.top + 10 }}
      className="flex-row justify-between px-4 pb-2 border-b border-gray-300"
    >
      <Pressable onPress={goBack}>
        <Ionicons name="chevron-back" size={24} />
      </Pressable>

      {headerText && (
        <View className="flex-1">
          <Text className="text-xl font-semibold text-center -ml-7">
            {headerText}
          </Text>
        </View>
      )}

      {leftHeader && (
        <Link href={leftHeader.link}>
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          <Ionicons name={leftHeader.icon as any} size={24} />
        </Link>
      )}
    </View>
  );
}
