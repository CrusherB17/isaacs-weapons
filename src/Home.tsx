import React, { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { WeaponCard } from "./components/WeaponCard";
import { Footer } from "./components/Footer";
import { weapons } from "./data/weapons";

export function Home() {
  const tw = useTailwind();

  const featuredWeapons = weapons.filter((weapon) => weapon.featured);
  const weaponStatus = weapons.filter((weapon) => weapon.status === "ordered");

  return (
    <ScrollView style={tw("bg-tertiary")}>
      <View style={tw("border-b")}>
        <Text style={tw("pl-8 text-lg text-primary")}>Upcoming Weapons</Text>
      </View>
      {weaponStatus.map((weapon) => (
        <WeaponCard key={weapon.name} {...weapon} />
      ))}

      <View style={tw("border-b")}>
        <Text style={tw("pl-8 mt-4 text-lg text-primary")}>
          Featured Weapons
        </Text>
      </View>
      {featuredWeapons.map((weapon) => (
        <WeaponCard key={weapon.name} {...weapon} />
      ))}

      <Footer />
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
