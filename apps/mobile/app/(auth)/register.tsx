import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Alert, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

import useAuthStore from "@/hooks/useUser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { SocialAuth } from "@/components/auth/social-auth";

export default function Register() {
	const setAuth = useAuthStore((state) => state.setAuth);

	const router = useRouter();

	const [registerData, setRegisterData] = useState({
		email: "",
		password: "",
		cfPassword: "",
	});

	const handleInputChange = (field: string, value: string) => {
		setRegisterData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleLogin = () => {
		if (!registerData.email || !registerData.password) {
			Alert.alert("Error", "Please fill out all fields.");
			return;
		}

		if (registerData.password !== registerData.cfPassword) {
			Alert.alert("Error,", "Passwords Don't Match");
		}

		setAuth(true);

		router.replace("/");

		console.log("Register Data:", registerData);
		Alert.alert("Success", "Logged in successfully!");
	};

	return (
		<View className="justify-center flex-1 gap-12 p-8 bg-white">
			<Text className="text-6xl font-bold">Create an account</Text>

			<View className="gap-8">
				<View className="gap-2">
					<Label nativeID="email">Email</Label>
					<Input
						id="email"
						placeholder="Enter your email"
						value={registerData.email}
						onChangeText={(text) => handleInputChange("email", text)}
						keyboardType="email-address"
						autoCapitalize="none"
					/>
				</View>

				<View className="relative w-full gap-2">
					<Label nativeID="password">Password</Label>
					<Input
						id="password"
						placeholder="Enter your password"
						value={registerData.password}
						onChangeText={(text) => handleInputChange("password", text)}
						type="password"
					/>
				</View>

				<View className="relative w-full gap-2">
					<Label nativeID="cfPassword">Confirm Password</Label>
					<Input
						id="cfPassword"
						placeholder="Confirm Password"
						value={registerData.cfPassword}
						onChangeText={(text) => handleInputChange("cfPassword", text)}
						type="password"
					/>

					<Text className="mt-4">
						By clicking the Register button, you agree to the public offer
					</Text>
				</View>
			</View>

			<Button onPress={handleLogin}>
				<Text>Register</Text>
			</Button>

			<View className="gap-4">
				<Text className="text-center text-md">- OR Continue with -</Text>
				<SocialAuth />

				<Text className="text-center">
					Already Have An Account ?{" "}
					<Link
						href={"/(auth)/login"}
						className="text-lg underline text-primary"
					>
						Sign In
					</Link>
				</Text>
			</View>
		</View>
	);
}
