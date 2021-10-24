import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"

import { Card } from "../components/UI/Card"
import { Input } from "../components/UI/Input"
import colors from "../constants/colors"

export const StartGameScreen: React.FC = () => {
  const [numberToGuess, setNumberToGuess] = React.useState("")

  const onNumberChange = (value: string) => {
    setNumberToGuess(value.replace(/[^0-9]/g, ""))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Start a New Game!</Text>
          <View>
            <View style={{ marginBottom: 20 }}>
              <Input
                label="Enter a Number"
                keyboardType="number-pad"
                onChangeText={onNumberChange}
                value={numberToGuess}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginRight: 5 }}>
                <Button title="Reset" color={colors.secondary} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Confirm" color={colors.primary} />
              </View>
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
    alignItems: "center",
    marginTop: 20,
  },

  card: {
    minWidth: 300,
    maxWidth: "90%",
  },

  cardTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
  },
})
