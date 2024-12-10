import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Button } from "@/components/ui/button";

export function SocialAuth() {
	return (
		<View className="flex-row justify-center gap-4">
			<Button className="items-center justify-center bg-white border rounded-full w-fit">
				<FontAwesome name="google" size={20} />
			</Button>
			<Button className="items-center justify-center bg-white border rounded-full w-fit">
				<FontAwesome name="github" size={20} />
			</Button>
		</View>
	);
}
