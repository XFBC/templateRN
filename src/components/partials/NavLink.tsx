import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'

export default function NavLink({ active, icon, title, path, navigation }: { active: boolean, icon: any, title: string, path: string, navigation: any }) {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => navigation.navigate(path)}
    >
      {icon}
      <Text style={[styles.text, { color: active ? '#D94540' : '#6F8790' }]} >
        {title}
      </Text>
      <View style={[styles.bar, { backgroundColor: active ? '#D94540' : '#ffffff' }]}></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bar: {
    width: 60,
    height: 4,
    marginTop: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  }
})
