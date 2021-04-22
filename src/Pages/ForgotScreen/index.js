import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Block, Input, Text } from "../../components";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { theme } from "../../constants";

export default function ForgotScreen() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();
  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  function handleForgot() {
    const VALID_EMAIL = "";

    Keyboard.dismiss();
    setLoading(true);

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }

    setLoading(false);
    setErrors();

    if (!errors.length) {
      Alert.alert(
        "Password sent!",
        "Please check you email.",
        [
          {
            text: "OK",
            onPress: () => {
              navigate("LoginScreen");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Error",
        "Please check you Email address.",
        [{ text: "Try again" }],
        { cancelable: false }
      );
    }
  }

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={(0, theme.sizes.base * 2)}>
        <Text h1 bold>
          Recover Password
        </Text>
        <Block middle>
          <Input
            label="Email"
            style={[styles.input]}
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
            error={hasErrors("email")}
          />
          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Send Email
              </Text>
            )}
          </Button>
          <Button onPress={() => navigate("LoginScreen")}>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              Back to Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}
