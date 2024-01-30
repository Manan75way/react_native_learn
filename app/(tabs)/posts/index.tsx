import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function list() {
  return (
    <View>
      <Link style={{ fontSize: 20 }} href="/posts/1">
        Get Post 1
      </Link>
      <Link style={{ fontSize: 20 }} href="/posts/2">
        Get Post 2
      </Link>
      <Link style={{ fontSize: 20 }} href="/posts/3">
        Get Post 3
      </Link>
    </View>
  );
}
