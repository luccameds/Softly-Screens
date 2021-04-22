import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { theme } from "../constants";

export default class Divider extends Component {
  render() {
    const { color, style, ...props } = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <View
        color={color || theme.colors.gray}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    marginHorizontal: 15,
    marginVertical: 15,
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
