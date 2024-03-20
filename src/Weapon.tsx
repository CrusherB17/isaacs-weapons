import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ScrollView, View } from "react-native";
import { Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Weapon">;

export const Weapon = ({ route }: Props) => {
  const weapon = route.params;
  const tw = useTailwind();
  const textRows = [
    <Text style={tw("p-3 text-secondary")}>
      <Text style={tw("font-bold text-primary")}>Weapon Name:</Text>{" "}
      {weapon.name}
    </Text>,
    <Text style={tw("p-3 text-secondary")}>
      <Text style={tw("font-bold text-primary")}>Weapon Type:</Text>{" "}
      {weapon.type}
    </Text>,
    <Text style={tw("p-3 text-secondary")}>
      <Text style={tw("font-bold text-primary")}>Weapon Category:</Text>{" "}
      {weapon.category}
    </Text>,
    <Text style={tw("p-3 text-secondary")}>
      <Text style={tw("font-bold text-primary")}>Handle Material:</Text>{" "}
      {weapon.material.handle}
    </Text>,
    weapon.material.blade ? (
      <Text style={tw("p-3 text-secondary")}>
        <Text style={tw("font-bold text-primary")}>Blade Material:</Text>{" "}
        {weapon.material.blade}
      </Text>
    ) : null,
    weapon.material.string ? (
      <Text style={tw("p-3 text-secondary")}>
        <Text style={tw("font-bold text-primary")}>String Material:</Text>{" "}
        {weapon.material.string}
      </Text>
    ) : null,
    weapon.type === "Melee" ? (
      <Text style={tw("p-3 text-secondary ")}>
        <Text style={tw("font-bold text-primary")}>Tang:</Text> {weapon.tang}
      </Text>
    ) : null,
    <Text style={tw("p-3 text-secondary")}>
      <Text style={tw("font-bold text-primary")}>Use:</Text> {weapon.use}
    </Text>,
    weapon.status === "aquired" ? (
      <Text style={tw("p-3 text-secondary ")}>
        <Text style={tw("font-bold text-primary")}>Bought On:</Text>{" "}
        {weapon.acquired}
      </Text>
    ) : null,
  ].filter((row) => row);

  return (
    <ScrollView style={tw("flex-1")}>
      <Image style={tw("w-full h-28")} source={weapon.img}></Image>

      {textRows.map((row, index) => (
        <View
          key={index}
          style={index % 2 == 0 ? null : tw("flex-row justify-end")}
        >
          {row}
        </View>
      ))}
    </ScrollView>
  );
};
