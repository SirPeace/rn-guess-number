import React from "react"
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native"

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
  const [isScreenLarge, setIsScreenLarge] = React.useState(
    Dimensions.get("screen").width > 350 &&
      Dimensions.get("screen").height > 450
  )

  const { setRoute } = React.useContext(ScreenRouterContext)

  React.useEffect(() => {
    const updateScreenState = () => {
      setIsScreenLarge(
        Dimensions.get("screen").width > 350 &&
          Dimensions.get("screen").height > 450
      )
    }

    Dimensions.addEventListener("change", updateScreenState)

    return () => Dimensions.removeEventListener("change", updateScreenState)
  })

  const imageContainerModification = isScreenLarge
    ? styles.imageContainer_large
    : {}

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <TitleText style={styles.title}>The Game is Over!</TitleText>

        <View style={{ alignItems: "center" }}>
          <View
            style={{ ...styles.imageContainer, ...imageContainerModification }}
          >
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
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
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 100, // to make a circle - should be half of the width/height
    overflow: "hidden",
    marginVertical: 30,
    alignItems: "center",
  },

  imageContainer_large: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
})

export default GameOverScreen
