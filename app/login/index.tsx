import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {useRouter } from "expo-router";
import { useState } from "react";

const Login = () => {

  const[email,setEmail] = useState<string>("");
  const[password,setPassword] = useState<string>("");
const[display,setDisplay] = useState(false)

const router = useRouter();
  const onPressLogin = ()=>{
    setDisplay(pre=>!pre);
    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email)=>(setEmail(email))}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password)=>(setPassword(password))}
          value={password}
        />
      </View>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      {display && <Text>{email}</Text>}
      {display && <Text>{password}</Text>}

    </View>
  );
};

export default Login;

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
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    paddingTop:15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    height: 50,
    color: "white",
  },
});
