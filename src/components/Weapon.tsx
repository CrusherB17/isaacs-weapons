import React from 'react-native';
import { ImageSourcePropType, View, Image, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Weapon = ({src, name, type, acquired}: {src: ImageSourcePropType, name: string, type: string, acquired: string}) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-row border-2 m-2 items-center')}>
      <Image style={tw('w-28 h-28')} source={src}></Image>
      <View style={tw('flex-1')}>
        <View style={tw('flex-1  justify-around')}>
          <Text style={tw('text-center')}>Name : {name}</Text>
          <Text style={tw('text-center')}>Type : {type}</Text>
          <Text style={tw('text-center')}>Bought on : {acquired}</Text>
        </View>
      </View>
    </View>
  );
};