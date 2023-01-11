import React from 'react'
import { View } from 'react-native'

export default function Container({ children }: { children: any }) {
  return (
    <View style={{ width: '100%', paddingHorizontal: 16, flex: 1 }}>{children}</View>
  )
}
