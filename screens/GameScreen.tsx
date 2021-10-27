import React from "react"
import { View, StyleSheet, Alert } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import colors from "../constants/colors"
import gameRules from "../constants/gameRules"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"
import { Button } from "../components/UI/Button"
import { Text } from "../components/UI/Text"

type GameScreenProps = {
  number: number
}

export const GameScreen: React.FC<GameScreenProps> = ({ number }) => {
  const [currentGuess, setCurrentGuess] = React.useState(
    getRandomIntBetween(gameRules.minNumber, gameRules.maxNumber)
  )

  const maxBoundary = React.useRef(gameRules.maxNumber)
  const minBoundary = React.useRef(gameRules.minNumber)
  const triesCount = React.useRef(0)

  const { setRoute } = React.useContext(ScreenRouterContext)

  const tryToGuess = (min: number, max: number) => {
    if (min > number || max < number) {
      return Alert.alert("Don't lie!", "We know that it's wrong, don't we?")
    }

    let randomInt = getRandomIntBetween(min, max, currentGuess)

    minBoundary.current = min
    maxBoundary.current = max
    triesCount.current++

    setCurrentGuess(randomInt)
  }

  React.useEffect(() => {
    if (currentGuess === number) {
      setRoute({
        name: "gameOver",
        params: {
          triesCount: triesCount.current,
          number,
        },
      })
    }
  }, [currentGuess])

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>Opponent's guess:</Text>
        <View style={styles.guessContainer}>
          <Text bold style={styles.guessValue}>
            {currentGuess}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => tryToGuess(minBoundary.current, currentGuess)}
              title={<AntDesign name="minus" size={24} />}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => tryToGuess(currentGuess + 1, maxBoundary.current)}
              title={<AntDesign name="plus" size={24} />}
              type="primary"
            />
          </View>
        </View>
      </View>

      <View style={styles.backButton}>
        <Button
          title="Back to menu"
          onPress={() => setRoute({ name: "startGame" })}
          type="primary"
          flat
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
function getRandomIntBetween(
  first: number,
  second: number,
  exclude: number | null = null
): number {
  const min = Math.round(Math.min(first, second))
  const max = Math.round(Math.max(first, second))

  let randomInt = Math.floor(Math.random() * (max - min)) + min

  while (randomInt === exclude) {
    randomInt = getRandomIntBetween(min, max, exclude)
  }

  return randomInt
}
