import { Slot } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
	return (
		<View className="flex-1 bg-white web:px-40">
			<Slot />
		</View>
	);
}
