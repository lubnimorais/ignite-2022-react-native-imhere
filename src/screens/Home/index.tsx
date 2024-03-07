import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { useCallback, useState } from "react"
import { ParticipantComponent } from "../../components/Participant"

export const HomeScreen = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')
  

  const handleParticipantAdd = useCallback(() => {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    }

    setParticipants(oldState => [...oldState, participantName])
    setParticipantName('')
  }, [participantName])

  const handleParticipantRemove = useCallback((name: string) => {
    Alert.alert(
      'Participante existe', 
      `Deseja remover o participante ${name}?`, 
      [
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            setParticipants(oldState => {
              const participantRemoved = oldState.filter(participant => participant !== name)
              
              return participantRemoved
            })
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
          value={participantName}
          onChangeText={text => {
            setParticipantName(text)
          }}
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