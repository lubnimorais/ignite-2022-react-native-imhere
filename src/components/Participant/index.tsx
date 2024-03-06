import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

interface ParticipantsProps {
  name: string;
  onRemove: () => void;
}

export const ParticipantComponent = ({ name, onRemove }: ParticipantsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}