import { Alert, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { useRouter } from "expo-router";
import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ResetPassword() {
	const router = useRouter();

	const [otp, setOtp] = useState("");
	const [password, setPassword] = useState({
		password: "",
		cfPassword: "",
	});

	const [otpVerified, setOtpVerified] = useState(false);

	const handleVerifyOtp = () => {
		if (otp.length === 6) {
			setOtpVerified(true);
		}
	};

	const handleInputChange = (field: string, value: string) => {
		setPassword((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleResetPassword = () => {
		Alert.alert("Password Reset", "Successfully");
		console.log({ otp, password });
	};

	return (
		<View className="flex-1 gap-12 p-8 bg-white py-14">
			<Text className="text-6xl font-bold">Reset Password </Text>

			<View className="justify-center flex-1 gap-10 -mt-20">
				<View className="gap-2">
					<Label nativeID="otp">OTP</Label>
					<OtpInput
						numberOfDigits={6}
						onTextChange={(text) => setOtp(text)}
						disabled={otpVerified}
					/>
				</View>

				{otpVerified && (
					<View className="gap-4">
						<View className="relative w-full gap-2">
							<Label nativeID="password">Password</Label>
							<Input
								id="password"
								placeholder="Enter your new password"
								value={password.password}
								onChangeText={(text) => handleInputChange("password", text)}
								type="password"
							/>
						</View>

						<View className="relative w-full gap-2">
							<Label nativeID="cfPassword">Confirm Password</Label>
							<Input
								id="cfPassword"
								placeholder="Confirm Password"
								value={password.cfPassword}
								onChangeText={(text) => handleInputChange("cfPassword", text)}
								type="password"
							/>
						</View>
					</View>
				)}

				<View className="gap-2">
					{otpVerified ? (
						<Button onPress={handleResetPassword}>
							<Text className="text-white">Reset Password</Text>
						</Button>
					) : (
						<Button onPress={handleVerifyOtp}>
							<Text className="text-white">Verify OTP</Text>
						</Button>
					)}
					<Button variant={"outline"} onPress={() => router.back()}>
						<Text className="text-black">Back</Text>
					</Button>
				</View>
			</View>
		</View>
	);
}
