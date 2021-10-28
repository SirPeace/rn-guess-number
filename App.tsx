import React from "react"
import AppLoading from "expo-app-loading"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"

import Header from "./components/Header"
import ScreenRouter from "./screens/ScreenRouter"

export default function App() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    loadFonts().then(() => setLoading(false))
  }, [])

  if (loading) return <AppLoading />

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
    backgroundColor: "#fff",
  },
})

const loadFonts = () =>
  Font.loadAsync({
    "Open Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open Sans Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
