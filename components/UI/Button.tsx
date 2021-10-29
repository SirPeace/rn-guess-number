import React from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native"

import colors from "../../constants/colors"
import Text from "./Text"

type ButtonProps = {
  onPress: () => void
  title: string | JSX.Element
  type?: "primary" | "secondary"
  flat?: boolean
}

const Button: React.FC<ButtonProps> = props => {
  let buttonStyles = styles.button

  if (props.type === "primary") {
    buttonStyles = { ...buttonStyles, ...styles.button__primary }
  }
  if (props.flat) {
    buttonStyles = { ...buttonStyles, ...styles.button__flat }
  }

  const Touchable = Platform.select<any>({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback,
  })

  return (
    <Touchable onPress={props.onPress} activeOpacity={0.65}>
      <View style={buttonStyles}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },

  button__primary: {
    backgroundColor: colors.primary,
  },

  button__flat: {
    borderRadius: 0,
  },

  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
})

export default Button
