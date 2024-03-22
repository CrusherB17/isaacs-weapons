import { ImageSourcePropType } from "react-native";

export interface Category {
  img: ImageSourcePropType;
  name: "Melee" | "Ranged";
}

export const categories: Category[] = [
  {
    name: "Melee",
    img: require("../../assets/sword.png"),
  },
  {
    name: "Ranged",
    img: require("../../assets/rifle.png"),
  },
];
