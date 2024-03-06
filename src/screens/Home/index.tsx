import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { useCallback } from "react"
import { ParticipantComponent } from "../../components/Participant"

export const HomeScreen = () => {
  const participants = [
    'Lubni Morais', 
    'Rodrigo Gonçalves', 
    'Diego Fernandes', 
    'Vini',
    'Jack',
    'Ana',
    'Filipe',
    'Isabella',
    'Mayk',
    'Biro'
  ]

  const handleParticipantAdd = useCallback(() => {
    if (participants.includes('Lubni Morais')) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    }
    console.log('botão adicionar');
  }, [])

  const handleParticipantRemove = useCallback((name: string) => {
    Alert.alert(
      'Participante existe', 
      `Deseja remover o participante ${name}?`, 
      [
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            console.log(`Remover: ${name}`)
          }
        },
        {
          text: 'Não',
          style: 'cancel',
          onPress: () => null
        }
      ]
    )

    
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

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item: participant}) => (
          <ParticipantComponent key={participant} name={participant} onRemove={() => {
            handleParticipantRemove(participant)
          }}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista presença</Text>
        )}
      />
    </View>
  )
}