import React, { useState } from "react";
import { Block, Button, Text } from "../../components";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Modal,
  ScrollView,
  LogBox,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { theme } from "../../constants";

LogBox.ignoreAllLogs();

export default function WelcomeScreen() {
  const [state, setState] = useState(1);
  const [showTerms, setShowTerms] = useState(false);
  const scrollX = new Animated.Value(0);

  const { navigate } = useNavigation();
  const { width, height } = Dimensions.get("window");
  const stepPosition = Animated.divide(scrollX, width);

  const illustrations = [
    {
      id: 1,
      source: require("../../assets/Introduction/Money.png"),
      title: "Divulgation",
      text:
        "Create your Digital Marketing through the app, spreading your quality service to everyone!",
    },
    {
      id: 2,
      source: require("../../assets/Introduction/Profile.png"),
      title: "Organization",
      text:
        "Manage your monthly invoicing more accurately! Historical data on your latest services and appointments!",
    },
    {
      id: 3,
      source: require("../../assets/Introduction/Woman.png"),
      title: "Business",
      text:
        "Its outlined strategies and goals seen in a clearer and more objective way!",
    },
  ];

  return (
    <Block>
      <Block center bottom flex={0.4}>
        <Text h1 center bold>
          Manage with {""}
          <Text h1 primary>
            Softly.
          </Text>
        </Text>
        <Text h3 gray style={{ marginTop: theme.sizes.padding / 2 }}>
          Enjoy your Experience!
        </Text>
      </Block>
      <Block center middle>
        <Block>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={illustrations}
            extraDate={state}
            keyExtractor={(item, index) => {
              `${item.id}`;
            }}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={item.source}
                  resizeMode="contain"
                  style={{
                    marginVertical: 25,
                    width,
                    height: height / 5,
                    overflow: "visible",
                  }}
                />
                <Text
                  style={{
                    width: 300,
                    alignSelf: "center",
                    paddingVertical: 30,
                  }}
                  h3
                  center
                  bold
                >
                  {item.title}
                </Text>
                <Text style={{ width: 300, alignSelf: "center" }} h5 center>
                  {item.text}
                </Text>
              </View>
            )}
            onScroll={Animated.event([
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ])}
          />
        </Block>
        <Block row center middle style={styles.stepsContainer}>
          {illustrations.map((item, index) => {
            const opacity = stepPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.4, 1, 0.4],
              extrapolate: "clamp",
            });

            return (
              <Block
                animated
                flex={false}
                key={`step-${index}`}
                color="gray"
                style={[styles.steps, { opacity }]}
              />
            );
          })}
        </Block>
      </Block>
      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={() => navigate("LoginScreen")}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => navigate("SignUpScreen")}>
          <Text center semibold>
            Sign Up
          </Text>
        </Button>
        <Button
          onPress={() => {
            setShowTerms(true);
          }}
        >
          <Text center caption gray>
            Terms of Service
          </Text>
        </Button>
      </Block>
      <Modal
        animationType="slide"
        visible={showTerms}
        onRequestClose={() => setShowTerms(false)}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button gradient onPress={() => setShowTerms(false)}>
              <Text center white>
                Accept the terms
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    </Block>
  );
}
