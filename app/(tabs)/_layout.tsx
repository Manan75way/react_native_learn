import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarLabel: "About",
        }}
      />

<Tabs.Screen
        name="posts"
        options={{
          headerTitle: "Posts",
          tabBarLabel: "Posts",
          headerShown:false
        }}
      />

    </Tabs>
  );
}
