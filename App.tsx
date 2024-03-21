import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { Home } from "./src/Home";
import { NavigationContainer } from "@react-navigation/native";
import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Info } from "./src/Info";
import { Header } from "./src/components/Header";
import { Weapons } from "./src/Weapons";
import { Weapon } from "./src/Weapon";
import { Weapon as WeaponType } from "./src/data/weapons";
import { Ranged } from "./src/Ranged";
import { Melee } from "./src/Melee";

export type RootStackParamList = {
  Home: undefined;
  Weapons: undefined;
  Info: undefined;
  Weapon: WeaponType;
  Melee: undefined;
  Ranged: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ header: () => <Header /> }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Weapons" component={Weapons} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Weapon" component={Weapon} />
          <Stack.Screen name="Melee" component={Melee} />
          <Stack.Screen name="Ranged" component={Ranged} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
