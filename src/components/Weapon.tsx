import React from 'react-native';
import { ImageSourcePropType, View, Image, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Weapon = ({src, name, type}: {src: ImageSourcePropType, name: string, type: string}) => {
  const tw = useTailwind();
  return (
    <View style={tw('justify-start h-1/2 flex-wrap border-2')}>
      <Text>Name : {name}</Text>
      <Text>Type : {type}</Text>
      <Image style={tw('w-1/2 h-1/2')} source={src}></Image>
    </View>
  );
};