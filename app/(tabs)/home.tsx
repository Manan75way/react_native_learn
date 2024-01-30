import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function home() {
  const router = useRouter();
  return (
    <View>
      <Text>home tab</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
