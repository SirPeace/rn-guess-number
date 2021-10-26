import React from "react"
import { Text as NativeText, StyleSheet } from "react-native"

export const TitleText: React.FC<{ [k: string]: any }> = props => (
  <NativeText style={{ ...styles.title, ...props.style }}>
    {props.children}
  </NativeText>
)

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open Sans Bold",
    fontSize: 20,
  },
})
