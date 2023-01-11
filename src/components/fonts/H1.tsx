import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function H1({ title, color = "black" }: { title: string, color?: string }) {
  return (
    <Text style={[styles.text, { color: color }]}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})

