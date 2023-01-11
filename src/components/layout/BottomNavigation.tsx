import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Container from './Container';
import NavLink from '../partials/NavLink';
import HomeIcon from '../svg/HomeIcon'
import TicketIcon from '../svg/TicketIcon';

export default function BottomNavigation({ active, navigation }: { active: string, navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.links}>
        <NavLink
          active={active === "Home"}
          title={'Home'}
          path={'Home'}
          icon={<HomeIcon active={active === "Home"} />}
          navigation={navigation}
        />

        <NavLink
          active={active === "Convites"}
          title={'Convites'}
          path={'Convites'}
          icon={<TicketIcon active={active === "Convites"} />}
          navigation={navigation}
        />

        <NavLink
          active={active === "Boleto"}
          title={'Boletos'}
          path={'Boleto'}
          icon={<HomeIcon active={active === "Boleto"} />}
          navigation={navigation}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    paddingTop: 8,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginTop: 8,
    // shadow top
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    }
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
})
