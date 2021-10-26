import React from "react"
import { Text as NativeText, StyleSheet } from "react-native"

type TextProps = {
  bold?: boolean
  [k: string]: any
}

export const Text: React.FC<TextProps> = props => {
  const textStyles = props.bold
    ? { ...styles.textBold, ...props.style }
    : { ...styles.text, ...props.style }

  return <NativeText style={textStyles}>{props.children}</NativeText>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Open Sans",
  },

  textBold: {
    fontFamily: "Open Sans Bold",
  },
})
