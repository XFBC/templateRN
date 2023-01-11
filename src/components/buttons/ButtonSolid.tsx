import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons';

interface IButtonSolid {
  title: string,
  icon?: 'user' | 'edit' | 'cart' | 'ticket' | 'share-2' | 'copy',
  onPress: () => void,
  backgroundColor?: any,
  color?: any,
}

export default function ButtonSolid({ title, icon, onPress, backgroundColor, color }: IButtonSolid) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, backgroundColor && { backgroundColor: backgroundColor }]}>
      {
        icon === "user" && <FontAwesome name="user-o" size={20} color="white" />
      }
      {
        icon === "edit" && <Feather name="edit" size={20} color="white" />
      }
      {
        icon === "ticket" && <FontAwesome name="ticket" size={20} color="white" />
      }
      {
        icon === "share-2" && <Feather name="share-2" size={20} color="white" />
      }
      {
        icon === "copy" && <Feather name="copy" size={20} color="white" />
      }

      <Text style={[styles.text, icon && { marginLeft: 8 }, color && { color: color }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0079BD',
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
