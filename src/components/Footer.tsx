import { Link } from "@react-navigation/native";
import React, { Linking, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Footer = () => {
  const tw = useTailwind();
  return (
    <View style={tw("flex-row border-t-2 mt-4")}>
      <View style={tw("justify-center flex-1")}>
        <Text style={tw("font-bold text-center")}>Usefull Links</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.riflegear.com/")}
        >
          <Text style={tw("text-center m-2")}>riflegear.com</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.budk.com/")}
        >
          <Text style={tw("text-center m-2")}>budk.com</Text>
        </TouchableOpacity>
      </View>
      <View style={tw("justify-center flex-1")}>
        <Text style={tw("text-center font-bold m-2")}>Contact Info</Text>
        <Text style={tw("text-center m-2")}>Phone: (937) 205-9740</Text>
        <Text style={tw("text-center m-2")}>isaacbrandyberry@gmail.com</Text>
      </View>
    </View>
  );
};
