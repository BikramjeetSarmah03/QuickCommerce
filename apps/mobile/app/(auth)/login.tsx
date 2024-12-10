import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Alert, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { SocialAuth } from "@/components/auth/social-auth";

import useAuthStore from "@/hooks/useUser";

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    setAuth(true);

    router.replace("/");

    console.log("Login Data:", loginData);
    Alert.alert("Success", "Logged in successfully!");
  };

  return (
    <View className="justify-center flex-1 gap-12 p-8 bg-white ">
      <Text className="text-6xl font-bold">Welcome {"\n"}Back!</Text>

      <View className="gap-8">
        <View className="gap-2">
          <Label nativeID="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <View className="relative w-full gap-2">
            <Label nativeID="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChangeText={(text) => handleInputChange("password", text)}
              type="password"
            />
          </View>
          <Link
            href={"/(auth)/password/forgot"}
            className="text-right text-primary"
          >
            Forgot Password ?
          </Link>
        </View>
      </View>

      <Button onPress={handleLogin}>
        <Text>Login</Text>
      </Button>

      <View className="gap-4">
        <Text className="text-center text-md">- OR Continue with -</Text>
        <SocialAuth />

        <Text className="text-center">
          Create An Account{" "}
          <Link
            href={"/(auth)/register"}
            className="text-lg underline text-primary"
          >
            Sign Up
          </Link>
        </Text>
      </View>
    </View>
  );
}
