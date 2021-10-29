import React from "react"
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native"

import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
import Input from "../components/UI/Input"
import TitleText from "../components/UI/TitleText"
import gameRules from "../constants/gameRules"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"

const StartGameScreen: React.FC = () => {
  const [numberToGuess, setNumberToGuess] = React.useState("")
  const { setRoute } = React.useContext(ScreenRouterContext)
  const [isScreenLarge, setIsScreenLarge] = React.useState(
    Dimensions.get("screen").height > 700
  )

  React.useEffect(() => {
    const updateScreenState = () => {
      setIsScreenLarge(Dimensions.get("screen").height > 700)
    }

    Dimensions.addEventListener("change", updateScreenState)

    return () => Dimensions.removeEventListener("change", updateScreenState)
  })

  const onNumberChange = (value: string) => {
    setNumberToGuess(value.replace(/[^0-9]/g, ""))
  }

  const onConfirm = () => {
    Keyboard.dismiss()

    let number = Number.parseInt(numberToGuess)

    if (
      Number.isNaN(number) ||
      number < gameRules.minNumber ||
      number > gameRules.maxNumber
    ) {
      return Alert.alert(
        "Invalid number",
        `Type in integer between ${gameRules.minNumber} and ${gameRules.maxNumber}`,
        [{ text: "OK", onPress: () => setNumberToGuess("") }]
      )
    }

    setRoute({
      name: "game",
      params: { number },
    })
  }

  const screenModification = isScreenLarge ? styles.screen_large : {}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...styles.screen, ...screenModification }}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.card}>
          <View style={{ marginBottom: 20 }}>
            <Input
              label="Enter a Number"
              keyboardType="number-pad"
              onChangeText={onNumberChange}
              value={numberToGuess}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.button}>
              <Button onPress={() => setNumberToGuess("")} title="Reset" />
            </View>
            <View style={styles.button}>
              <Button onPress={onConfirm} title="Confirm" type="primary" />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },

  screen_large: {
    justifyContent: "center",
  },

  card: {
    width: 300,
    maxWidth: "90%",
  },

  title: {
    textAlign: "center",
    marginBottom: 15,
  },

  button: {
    flex: 1,
    marginHorizontal: 5,
  },
})

export default StartGameScreen
