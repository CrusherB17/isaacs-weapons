import React, { ScrollView } from "react-native";
import { weapons } from "./data/weapons";
import { WeaponCard } from "./components/WeaponCard";

export const Melee = () => {
  const meleeWeapons = weapons.filter((weapon) => weapon.type === "Melee");

  return (
    <ScrollView>
      {meleeWeapons.map((weapon) => (
        <WeaponCard key={weapon.name} {...weapon} />
      ))}
    </ScrollView>
  );
};
