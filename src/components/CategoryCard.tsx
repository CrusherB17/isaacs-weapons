import { useNavigation } from "@react-navigation/native";
import React, { ImageSourcePropType, TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Category } from "../data/category";
import { Melee } from "../Melee";
import { Ranged } from "../Ranged";

export const CategoryCard = (category: Category, Melee) => {
  const { img, name } = category;
  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <View style={tw("p-4")}>
      <TouchableOpacity
        onPress={() => navigation.navigate(`${category.name}`, Melee)}
      >
        <View style={tw("w-40 h-40 border-2 items-center")}>
          
          <Image source={img} style={tw("w-1/2 h-1/2 mt-7 mb-3")}></Image>
          <Text style={tw("font-bold text-xl")}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
