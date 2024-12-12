import { Ionicons } from "@expo/vector-icons";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import type { ImageSourcePropType } from "react-native";

import { Button } from "@/components/ui/button";

const { width } = Dimensions.get("screen");

export type Banner = {
  id: string | number;
  image: ImageSourcePropType;
  title: string;
  description: string[];
  buttonText: string;
};

export const BannerItem = ({
  image,
  title,
  description,
  buttonText,
}: Banner) => {
  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, height: 200, width, justifyContent: "center" }}
    >
      <View className="gap-3 p-4">
        <Text className="text-3xl font-semibold text-white">{title}</Text>

        <View>
          {description.map((line, i) => (
            <Text key={i + line} className="text-white text-md">
              {line}
            </Text>
          ))}
        </View>

        <Button
          variant={"outline"}
          className="inline-flex flex-row items-center gap-2 px-4 bg-transparent"
          style={{ alignSelf: "flex-start" }}
        >
          <Text className="-mt-1 text-lg text-white ">{buttonText}</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color={"#ffffff"}
            className="-mt-1"
          />
        </Button>
      </View>
    </ImageBackground>
  );
};
