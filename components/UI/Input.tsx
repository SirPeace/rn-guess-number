import React from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

type InputProps = {
  label?: string
  [k: string]: any
}

const Input: React.FC<InputProps> = props => (
  <View>
    {props.label && <Text style={styles.inputLabel}>{props.label}</Text>}
    <TextInput {...props} style={{ ...styles.input, ...props.style }} />
  </View>
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 4,
    padding: 5,
  },

  inputLabel: {
    fontSize: 12,
    color: "#777",
    marginBottom: 2,
    fontFamily: "Open Sans",
  },
})

export default Input
