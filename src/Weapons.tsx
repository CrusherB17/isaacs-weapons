import React, { ScrollView, TouchableOpacity, View } from "react-native";
import { Footer } from "./components/Footer";
import { CategoryCard } from "./components/CategoryCard";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { categories } from "./data/category";
import { Melee } from "./Melee";

export const Weapons = (Melee, Ranged, catties) => {
  const category = categories;
  const tw = useTailwind()

  return (
    <ScrollView>
      <View style={tw("flex-row")}>
        
          {category.map((catties) => (
            <CategoryCard key={catties.name} {...catties} />
          ))}

      </View>
      <Footer />
    </ScrollView>
  );
};
