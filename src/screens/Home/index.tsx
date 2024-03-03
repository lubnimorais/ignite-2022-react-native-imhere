import { Text, View } from "react-native"

import { styles } from "./styles"

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 3 de março de 2024</Text>
    </View>
  )
}