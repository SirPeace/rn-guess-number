import React from "react"
import { Button, StyleSheet, View } from "react-native"

import { Text } from "../components/UI/Text"
import { TitleText } from "../components/UI/TitleText"
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
        <TitleText style={styles.title}>Game Over!</TitleText>
        <Text style={styles.body}>
          <Text>
            Guessed number:&nbsp;
            <Text bold>{props.number}</Text>
            {"\n"}
          </Text>

          <Text>
            Attempts count:&nbsp;
            <Text bold>{props.triesCount}</Text>
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
    marginVertical: 20,
    textAlign: "center",
  },

  body: {
    marginBottom: 20,
  },
})
