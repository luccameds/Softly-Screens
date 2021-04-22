import React, { useState } from "react";
import { Button, Block, Text, Input } from "../../components";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { theme } from "../../constants";

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = [];

  function handleLogin() {
    setLoading(true);

    // check with backend API or with some static data
    // if (email !== VALID_EMAIL) {
    //   errors.push("email");
    // }
    // if (password !== VALID_PASSWORD) {
    //   errors.push("password");
    // }

    setLoading(false);

    if (!errors.length) {
      // Put the next screen name between ''
      navigate("");
    }
  }

  return (
    <Block padding={(0, theme.sizes.base * 2)}>
      <Text h1 bold>
        Login
      </Text>
      <Block middle>
        <Input
          label="Email"
          error={hasErrors("email")}
          style={[styles.input, hasErrors("email")]}
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          secure
          label="Password"
          error={hasErrors("password")}
          style={[styles.input, hasErrors("password")]}
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button gradient onPress={() => handleLogin()}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text bold white center>
              Login
            </Text>
          )}
        </Button>

        <Button
          onPress={() => {
            navigate("ForgotScreen");
          }}
        >
          <Text gray caption center style={{ textDecorationLine: "underline" }}>
            Forgot your password?
          </Text>
        </Button>
      </Block>
    </Block>
  );
}
