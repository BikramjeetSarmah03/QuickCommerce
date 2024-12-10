import { StatusBar, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={{ paddingTop: (StatusBar.currentHeight || 0) + 10 }}>
      <Text>Header</Text>
    </View>
  );
};
