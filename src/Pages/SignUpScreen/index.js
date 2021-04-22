import React, { useState } from "react";
import { Button, Block, Text, Input } from "../../components";
import { Alert, ActivityIndicator, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { theme } from "../../constants";

export default function SignUpScreen() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);
  const { navigate } = useNavigation();

  function handleSignUp() {
    Keyboard.dismiss();
    setLoading(true);

    // check with backend API or with some static data
    if (!email) setErrors("email");
    if (!username) setErrors("username");
    if (!password) setErrors("password");

    setLoading(false);

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigate("WelcomeScreen");
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <Block padding={[0, theme.sizes.base * 2]}>
      <Text h1 bold>
        Sign Up
      </Text>
      <Block middle>
        <Input
          label="Name"
          style={[styles.input, hasErrors("username")]}
          defaultValue={username}
          onChangeText={(text) => setUsername(text)}
          error={hasErrors("username")}
        />
        <Input
          email
          label="Email"
          style={[styles.input, hasErrors("email")]}
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          error={hasErrors("email")}
        />
        <Input
          secure
          label="Password"
          style={[styles.input, hasErrors("password")]}
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
          error={hasErrors("password")}
        />
        <Button gradient onPress={() => handleSignUp()}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text bold white center>
              Register now
            </Text>
          )}
        </Button>

        <Button onPress={() => navigate("WelcomeScreen")}>
          <Text gray caption center style={{ textDecorationLine: "underline" }}>
            Back to Login
          </Text>
        </Button>
      </Block>
    </Block>
  );
}
