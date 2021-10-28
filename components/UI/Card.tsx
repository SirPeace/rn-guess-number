import React from "react"
import { View, StyleSheet } from "react-native"

type anyAttributes = {
  [k: string]: any
}

const Card: React.FC<anyAttributes> = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{children}</View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.37,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
})

export default Card
