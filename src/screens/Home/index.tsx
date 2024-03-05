import { Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { useCallback } from "react"
import { ParticipantComponent } from "../../components/Participant"

export const HomeScreen = () => {
  const handleParticipantAdd = useCallback(() => {
    console.log('botão adicionar');
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 3 de março de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button}
          activeOpacity={0.7}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ParticipantComponent />
    </View>
  )
}