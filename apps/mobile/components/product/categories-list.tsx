import { FlatList, Image, Text, View } from "react-native";

export const CategoriesList = () => {
  return (
    <View className="p-4 border-b border-gray-300 bg-gray-200/40">
      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View className="items-center">
              <Image
                source={{ uri: item.imageUrl }}
                alt={item.title}
                height={50}
                width={50}
                className="object-fill overflow-hidden rounded-full"
              />
              <Text className="text-base">{item.title}</Text>
            </View>
          );
        }}
        contentContainerStyle={{
          gap: 20,
        }}
        nestedScrollEnabled
      />
    </View>
  );
};

const data = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/160x160",
    title: "Beauty",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/160x160",
    title: "Fashion",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/160x160",
    title: "Kids",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/160x160",
    title: "Mens",
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/160x160",
    title: "Womens",
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/160x160",
    title: "Girls",
  },
];
