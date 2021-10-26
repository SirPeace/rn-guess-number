import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"

type GameOverScreenProps = {
  number: number
  triesCount: number
}

export const GameOverScreen: React.FC<GameOverScreenProps> = props => {
  const { setRoute } = React.useContext(ScreenRouterContext)

  return (
    <View style={styles.screen}>
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>Game Over!</Text>
        <Text style={styles.body}>
          <Text>
            Guessed number:&nbsp;
            <Text style={styles.strong}>{props.number}</Text>
            {"\n"}
          </Text>

          <Text>
            Attempts count:&nbsp;
            <Text style={styles.strong}>{props.triesCount}</Text>
          </Text>
        </Text>
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
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
  },

  body: {
    marginBottom: 20,
  },

  strong: {
    fontWeight: "bold",
  },
})
