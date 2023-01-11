import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import CardHome from '../cards/CardHome'
import H1 from '../fonts/H1'


export default function HomeCards({ navigation }: { navigation: any }) {

  const cards = [
    {
      id: 6,
      title: 'Notificações',
      image: require('../../../assets/img/notificacoes.png'),
      route: 'NotificacaoScreen'
    },
  ]

  return (
    <View style={{ flex: 1, width: '100%', marginTop: 32 }}>
      <H1 title='O que você procura?' />
      <ScrollView >
        <View style={styles.container}>
          {
            cards.map(card => (
              <CardHome key={card.id} title={card.title} image={card.image} route={card.route} navigation={navigation} />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  }
})
