import useAuthStore from "@/hooks/useUser";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return (
    <View>
      <Text>Home Screen</Text>

      <Button title="Logout" onPress={() => setAuth(false)} />
    </View>
  );
}
