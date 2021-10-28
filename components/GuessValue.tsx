import React from "react"
import { View, StyleSheet } from "react-native"
import colors from "../constants/colors"
import { Text } from "./UI/Text"

type GuessValueProps = {
  value: string
}

export const GuessValue: React.FC<GuessValueProps> = props => (
  <View style={styles.guessContainer}>
    <Text bold style={styles.guessValue}>
      {props.value}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  guessValue: {
    fontSize: 22,
    color: colors.primary,
  },
})
