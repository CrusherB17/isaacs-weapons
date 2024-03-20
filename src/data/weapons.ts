import { ImageSourcePropType } from "react-native";

export type Weapon = {
  img: ImageSourcePropType;
  name: string;
  material: { blade?: string; handle: string; string?: string };
  use: string;
  featured: boolean;
  status: "aquired" | "wishlist" | "ordered";
  acquired?: string;
} & (MeleeWeapon | RangedWeapon);

interface MeleeWeapon {
  type: "Melee";
  category: "Axe" | "Sword" | "Knife";
  tang: "Half" | "Full";
}

interface RangedWeapon {
  type: "Ranged";
  category: "Bow" | "Rifle" | "Handgun";
}

export const weapons: Weapon[] = [
  {
    img: require("../../assets/IMG_2038.HEIC.jpeg"),
    name: "Dragon Destroyer",
    type: "Melee",
    category: "Axe",
    material: { handle: "Leather & Plastic", blade: "Stainless Steel" },
    tang: "Full",
    use: "Decorative",
    featured: false,
    status: "ordered",
  },
  {
    img: require("../../assets/IMG_2040.HEIC.jpeg"),
    name: "Slasher",
    type: "Melee",
    category: "Sword",
    material: { handle: "Wood & String", blade: "Carbon Steel" },
    tang: "Full",
    use: "Kill Non-Frozen Pumpkins",
    featured: true,
    status: "aquired",
    acquired: "01/02/03",
  },
  {
    img: require("../../assets/IMG_2040.HEIC.jpeg"),
    name: "Unicorn Slayer",
    type: "Ranged",
    category: "Bow",
    material: { handle: "Fiberglass", string: "Composite Fibers" },
    use: "Kill Unicorns",
    featured: true,
    status: "aquired",
    acquired: "01/02/03",
  },
];
