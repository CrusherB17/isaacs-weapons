import { useNavigation } from '@react-navigation/native';
import React, { TouchableOpacity } from 'react-native';
import { View, Image, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Weapon } from '../data/weapons';

export const WeaponCard = (weapon: Weapon) => {
  const {img, name, type, category, acquired} = weapon
  const tw = useTailwind();
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity style={tw('p-3')} onPress={() => navigation.navigate('Weapon', weapon)}>
        <View style={tw('flex-row border-2 items-center')}>
          <Image style={tw('w-28 h-28')} source={img}></Image>
          <View style={tw('flex-1')}>
            <View style={tw('flex-1  justify-around')}>
              <Text style={tw('text-center')}><Text style={tw('font-bold')}>Name:</Text> {name}</Text>
              <Text style={tw('text-center')}><Text style={tw('font-bold')}>Type:</Text> {type}</Text>
              <Text style={tw('text-center')}><Text style={tw('font-bold')}>Category:</Text> {category}</Text>
              { weapon.status === "aquired" ? <Text style={tw('text-center')}><Text style={tw('font-bold')}>Bought on:</Text> {acquired}</Text> : null}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};