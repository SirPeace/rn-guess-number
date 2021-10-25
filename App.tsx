import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { Header } from "./components/Header"
import { ScreenRouter } from "./screens/ScreenRouter"

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />

      <ScreenRouter />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
})
