import React from "react"
import { Route } from "../screens/ScreenRouter"

type ScreenRouterContext = {
  setRoute: React.Dispatch<React.SetStateAction<Route>>
}

export const ScreenRouterContext = React.createContext<ScreenRouterContext>(
  {} as ScreenRouterContext
)
