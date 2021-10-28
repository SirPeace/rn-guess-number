import React from "react"
import { View, StyleSheet, ViewStyle } from "react-native"

import Text from "./UI/Text"

type GuessProps = {
  value: string
  index: number
  style: ViewStyle
}

const GuessHistoryItem: React.FC<GuessProps> = props => (
  <View style={{ ...styles.guess, ...props.style }}>
    <Text>
      #{props.index}: {props.value}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  guess: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
})

export default GuessHistoryItem
