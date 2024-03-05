import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

export const ParticipantComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Lubni Morais</Text>

      <TouchableOpacity style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}