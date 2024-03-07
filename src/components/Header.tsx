import { useNavigation } from "@react-navigation/native"
import React, { TouchableOpacity } from "react-native"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTailwind } from "tailwind-rn"

export const Header = () => {
  const navigation = useNavigation()
  const tw = useTailwind()
  const insets = useSafeAreaInsets()
  return (
    <View style={{marginTop:insets.top}}>
      <View style={tw('')}>
        <Text style={tw('text-center text-primary font-bold text-xl p-3')}>
          Isaac's WEAPONS
        </Text>
      </View>
      <View style={tw('flex-row justify-around bg-primary p-3 text-secondary')}>
        <TouchableOpacity style={tw('p-3')} onPress={() => navigation.navigate('Home')}>
          <Text style={tw('text-lg text-secondary')}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw('p-3')} onPress={() => navigation.navigate('Weapons')}>
          <Text style={tw('text-lg text-secondary')}>Weapons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw('p-3')} onPress={() => navigation.navigate('Info')}>
          <Text style={tw('text-lg text-secondary')}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}