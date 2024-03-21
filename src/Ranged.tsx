import React, { ScrollView } from "react-native";
import { weapons } from "./data/weapons";
import { WeaponCard } from "./components/WeaponCard";

export const Ranged = () => {
  const rangedWeapons = weapons.filter((weapon) => weapon.type === "Ranged");


  return (
    <ScrollView>
      {rangedWeapons.map((weapon) => (
        <WeaponCard key={weapon.name} {...weapon} />
      ))}
    </ScrollView>
  );
};
