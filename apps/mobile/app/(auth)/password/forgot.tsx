import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const router = useRouter();

	const handleSubmit = () => {
		router.push("/(auth)/password/reset");
	};

	return (
		<View className="justify-center flex-1 gap-12 p-8 bg-white">
			<Text className="text-6xl font-bold">Forgot Password ?</Text>

			<View className="gap-4">
				<View>
					<Label nativeID="email">Email</Label>
					<Input
						id="email"
						placeholder="Enter your email address"
						keyboardType="email-address"
						autoCapitalize="none"
						value={email}
						onChangeText={(val) => setEmail(val)}
					/>
				</View>

				<Text>* We will send you a 6 digit OTP to your email</Text>
			</View>

			<View className="gap-4">
				<Button onPress={handleSubmit}>
					<Text className="text-xl text-white">Submit</Text>
				</Button>
				<Button variant={"outline"} onPress={() => router.back()}>
					<Text className="text-xl text-black">Back</Text>
				</Button>
			</View>
		</View>
	);
}
