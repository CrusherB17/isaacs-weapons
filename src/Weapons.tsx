import React, { ScrollView, TouchableOpacity, View } from "react-native";
import { Footer } from "./components/Footer";
import { CategoryCard } from "./components/CategoryCard";
import { useTailwind } from "tailwind-rn";
import { categories } from "./data/category";

export const Weapons = () => {
  const category = categories;
  const tw = useTailwind();

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
