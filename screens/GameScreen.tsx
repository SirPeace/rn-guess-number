import React from "react"
import { View, StyleSheet, Alert, FlatList } from "react-native"

import gameRules from "../constants/gameRules"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"
import Button from "../components/UI/Button"
import Text from "../components/UI/Text"
import GuessHistoryItem from "../components/GuessHistoryItem"
import GameGuessControls from "../components/GameGuessControls"

type GameScreenProps = {
  number: number
}

const initialGuess = String(
  getRandomIntBetween(gameRules.minNumber, gameRules.maxNumber)
)

const GameScreen: React.FC<GameScreenProps> = ({ number }) => {
  const [guessesHistory, setGuessesHistory] = React.useState([initialGuess])
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess)

  const maxBoundary = React.useRef(gameRules.maxNumber)
  const minBoundary = React.useRef(gameRules.minNumber)

  const { setRoute } = React.useContext(ScreenRouterContext)

  const tryToGuess = (min: number, max: number) => {
    if (min > number || max < number) {
      return Alert.alert("Don't lie!", "We know that it's wrong, don't we?")
    }

    let randomInt = getRandomIntBetween(min, max, +currentGuess)

    minBoundary.current = min
    maxBoundary.current = max

    setCurrentGuess(randomInt.toString())

    setGuessesHistory(guesses => [...guesses, randomInt.toString()])
  }

  React.useEffect(() => {
    if (+currentGuess === number) {
      setRoute({
        name: "gameOver",
        params: {
          triesCount: guessesHistory.length,
          number,
        },
      })
    }
  }, [currentGuess])

  return (
    <View style={styles.screen}>
      <View style={styles.containerWrapper}>
        <View style={styles.container}>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text>Opponent's guess:</Text>

            <GameGuessControls
              currentGuess={currentGuess}
              onLowerTry={() => tryToGuess(minBoundary.current, +currentGuess)}
              onGreaterTry={() =>
                tryToGuess(+currentGuess + 1, maxBoundary.current)
              }
            />
          </View>

          <View style={styles.containerWrapper}>
            <View style={styles.listContainer}>
              <FlatList
                contentContainerStyle={styles.list}
                keyExtractor={item => item}
                data={guessesHistory}
                renderItem={item => (
                  <GuessHistoryItem
                    value={item.item}
                    index={item.index + 1}
                    style={{ marginVertical: 10 }}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </View>

      <Button
        title="Back to menu"
        onPress={() => setRoute({ name: "startGame" })}
        type="primary"
        flat
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
  },

  containerWrapper: {
    alignItems: "center",
    flex: 1,
  },

  container: {
    flex: 1,
    width: "90%",
  },

  listContainer: {
    flex: 1,
    width: "80%",
  },

  list: {
    flexGrow: 1,
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
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

export default GameScreen
