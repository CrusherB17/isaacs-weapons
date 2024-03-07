import React from "react-native"
import { Text, View } from "react-native"
import { useTailwind } from "tailwind-rn"

export const Footer = () => {
  const tw = useTailwind()
  return (
    <View style={tw(' text-center justify-center')}>
      <Text style={tw('text-center text-xl')}>Contact Info</Text>
      <Text style={tw(' text-center')}>Phone: (937) 205-9740</Text>
      <Text style={tw(' text-center')}>isaacbrandyberry@gmail.com</Text>
    </View>
  )
}