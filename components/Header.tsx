import React from "react"
import { View, Text, StyleSheet } from "react-native"

import colors from "../constants/colors"

type HeaderComponentProps = {
  title: string
}

export const Header: React.FC<HeaderComponentProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 30,
  },

  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
})