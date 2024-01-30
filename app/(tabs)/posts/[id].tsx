import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function Page() {
const {id} = useLocalSearchParams();

  return (
    <View>
        <Stack.Screen options={{
            headerTitle:"Post" +id
        }}/>
      <Text>This is post details page {id}</Text>
    </View>
  )
}