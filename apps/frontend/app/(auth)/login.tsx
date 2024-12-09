import useAuthStore from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const router = useRouter();

  const handleLogin = () => {
    setAuth(true);

    router.replace("/");
  };

  return (
    <View>
      <Text>Hey Login Screen</Text>

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
