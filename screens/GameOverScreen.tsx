import React from "react"
import { Image, StyleSheet, View } from "react-native"

import Button from "../components/UI/Button"
import Text from "../components/UI/Text"
import TitleText from "../components/UI/TitleText"
import colors from "../constants/colors"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"

type GameOverScreenProps = {
  number: number
  triesCount: number
}

const GameOverScreen: React.FC<GameOverScreenProps> = props => {
  const { setRoute } = React.useContext(ScreenRouterContext)

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TitleText style={styles.title}>The Game is Over!</TitleText>

        <View style={{ alignItems: "center" }}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/success.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

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
          type="primary"
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

  container: {
    width: "80%",
  },

  title: {
    textAlign: "center",
  },

  body: {
    marginBottom: 20,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 150, // to make a circle - should be half of the width/height
    overflow: "hidden",
    marginVertical: 30,
    alignItems: "center",
  },
})

export default GameOverScreen
