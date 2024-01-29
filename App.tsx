import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [texts, setTexts] = useState<String>("god");
  const [num, setNum] = useState<number>(0);

  const handleClick = () => {
    setNum(pre=>pre+1);
  };

  const handlePress = ()=>{
    setTexts("bhagwan")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello duniya Welcome {texts}</Text>

      <Text style={styles.text}>Lorem ipsum {num}</Text>
      <Button title="CLick me" onPress={handleClick} />
      <Pressable style={styles.btn}>
        <Text style={styles.text} onPress={handlePress}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 40,
  },
});
