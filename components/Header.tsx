import React from "react"
import { View, Text, StyleSheet } from "react-native"

import colors from "../constants/colors"

type HeaderComponentProps = {
  title: string
}

const Header: React.FC<HeaderComponentProps> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 20,
  },

  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Open Sans",
  },
})

export default Header
