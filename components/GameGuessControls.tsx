import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import GuessValue from "./GuessValue"
import Button from "./UI/Button"

type GameGuessControlsProps = {
  currentGuess: string
  onLowerTry: () => void
  onGreaterTry: () => void
}

const GameGuessControls: React.FC<GameGuessControlsProps> = props => {
  const [deviceDimensions, setDeviceDimensions] = React.useState({
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  })

  React.useEffect(() => {
    const updateDimensions = () => {
      setDeviceDimensions({
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      })
    }

    Dimensions.addEventListener("change", updateDimensions)

    return () => Dimensions.removeEventListener("change", updateDimensions)
  }, [])

  if (deviceDimensions.width > deviceDimensions.height) {
    return (
      <View style={{ ...styles.wrapper, ...styles.wrapper_horizontal }}>
        <View style={styles.buttonHorizontal}>
          <Button
            onPress={props.onLowerTry}
            title={<AntDesign name="minus" size={24} />}
          />
        </View>

        <GuessValue value={props.currentGuess} />

        <View style={styles.buttonHorizontal}>
          <Button
            onPress={props.onGreaterTry}
            title={<AntDesign name="plus" size={24} />}
            type="primary"
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <GuessValue value={props.currentGuess} />

      <View style={{ flexDirection: "row" }}>
        <View style={styles.button}>
          <Button
            onPress={props.onLowerTry}
            title={<AntDesign name="minus" size={24} />}
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={props.onGreaterTry}
            title={<AntDesign name="plus" size={24} />}
            type="primary"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },

  wrapper_horizontal: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    marginHorizontal: 5,
    flexGrow: 1,
  },

  buttonHorizontal: {
    marginHorizontal: 20,
    width: 70,
  },
})

export default GameGuessControls
