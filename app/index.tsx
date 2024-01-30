import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to the Home page </Text>
      </View>
      <View>
        <View style={styles.inner}>
          <Link style={styles.link} href="/login" asChild>
            <Button title="Open Login Page" />
          </Link>
        </View>
        <View style={styles.inner}>
          <Link href="/register" asChild>
            <Button title="Open Register Page" />
          </Link>
        </View>
        <View style={styles.inner}>
          <Link href="/home" asChild>
            <Button title="Open home tab" />
          </Link>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 30,
  },
  inner: {
    marginBottom: 30,
  },
  link: {
    width: "50%",
    marginBottom: 50,
  },
});
