import React from "react"
import { ScreenRouterContext } from "../contexts/ScreenRouterContext"
import GameOverScreen from "./GameOverScreen"
import GameScreen from "./GameScreen"
import StartGameScreen from "./StartGameScreen"

export type Route = {
  name: string
  params?: {
    [k: string]: any
  }
}

const ScreenRouter: React.FC = () => {
  const [route, setRoute] = React.useState<Route>({
    name: "startGame",
  })

  return (
    <ScreenRouterContext.Provider value={{ setRoute }}>
      {route.name === "startGame" && <StartGameScreen />}
      {route.name === "game" && <GameScreen number={route.params?.number} />}
      {route.name === "gameOver" && (
        <GameOverScreen
          number={route.params?.number}
          triesCount={route.params?.triesCount}
        />
      )}
    </ScreenRouterContext.Provider>
  )
}

export default ScreenRouter
