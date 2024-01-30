import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

const RootLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="login/index"
        options={{
          title: "Login",
          headerRight: () => {
            return <Button
                  title="Forgot Password"
                  onPress={() => router.push("/forgetPassword")} />;
          },
        }}
      />
      <Stack.Screen
        name="register/index"
        options={{
          title: "Register",
        }}
      />

      <Stack.Screen
        name="forgetPassword"
        options={{
          title: "Forget Password",
          presentation: "modal",
        }}
      />

<Stack.Screen
        name="(tabs)"
        options={{
          headerShown:false
        }}
      />

      <Stack.Screen
        name="[missing]"
        options={{
          title: "404 Not found",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
