import React from "react"
import { View, Text, StyleSheet, Button, Alert } from "react-native"
import colors from "../constants/colors"
import gameRules from "../constants/gameRules"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"

type GameScreenProps = {
  number: number
}

const exclude: number[] = []
let triesCount = 0

export const GameScreen: React.FC<GameScreenProps> = ({ number }) => {
  const [currentGuess, setCurrentGuess] = React.useState(
    getRandomIntBetween(gameRules.minNumber, gameRules.maxNumber)
  )

  const { setRoute } = React.useContext(ScreenRouterContext)

  const tryToGuess = (first: number, second: number) => {
    let randomInt = getRandomIntBetween(first, second)

    for (let i = 0; exclude.includes(randomInt); i++) {
      randomInt = getRandomIntBetween(first, second)
    }

    exclude.push(randomInt)
    triesCount++

    setCurrentGuess(randomInt)
  }

  if (currentGuess === number) {
    Alert.alert(
      "Game finished!",
      `Computer found out your guessed number ${number} in ${triesCount} tries.`,
      [
        {
          text: "Back to menu",
          style: "cancel",
          onPress: () => setRoute({ name: "startGame" }),
        },
      ]
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>Opponent's guess</Text>
        <View style={styles.guessContainer}>
          <Text style={styles.guessValue}>{currentGuess}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => tryToGuess(gameRules.minNumber, currentGuess)}
              title="Lower"
              color={colors.secondary}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => tryToGuess(currentGuess + 1, gameRules.maxNumber)}
              title="Greater"
              color={colors.primary}
            />
          </View>
        </View>
      </View>

      <View style={styles.backButton}>
        <Button
          title="Back to menu"
          onPress={() => setRoute({ name: "startGame" })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },

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
    fontWeight: "bold",
  },

  backButton: {
    width: "100%",
  },

  buttonsContainer: {
    flexDirection: "row",
    maxWidth: "85%",
  },

  button: {
    flexGrow: 1,
    marginHorizontal: 5,
  },
})

/**
 * Get a random integer between given values including min value and excluding max value.
 *
 * @param first  First number
 * @param second  Second number
 */
function getRandomIntBetween(first: number, second: number): number {
  const min = Math.round(Math.min(first, second))
  const max = Math.round(Math.max(first, second))

  let randomInt = Math.floor(Math.random() * (max - min)) + min

  return randomInt
}
