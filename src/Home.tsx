import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export function Home() {
  const tw = useTailwind();

  const Weapons = (src: ImageSourcePropType, name: string, type: string) => {
    return (
      <View style={tw('justify-start h-1/2 flex-wrap')}>
        <Image style={tw('w-1/2 h-1/2')} source={src}></Image>
        <View>
          <Text>Name : {name}</Text>
          <Text>Type : {type}</Text>
        </View>
      </View>
    );
  };

  const secondaryCategories = (category) => {
    return <Text style={tw('font-semibold text-lg')}>{category}</Text>;
  };
  return (
    <SafeAreaView style={tw('flex-1')}>
      <View style={tw('bg-black')}>
        <Text style={tw('text-center text-stone-200 font-bold text-xl p-3')}>
          Isaac's WEAPONS
        </Text>
      </View>
      <View style={tw('flex-row justify-around bg-red-900')}>
        <Text style={tw('font-semibold text-xl text-stone-200')}>Ranged</Text>
        <Text style={tw('font-semibold text-xl text-stone-200')}>Melee</Text>
      </View>
      <View style={tw('flex-row justify-around p-2 w-full bg-stone-200')}>
        {secondaryCategories('Rifles')}
        {secondaryCategories('Handguns')}
        {secondaryCategories('Bows')}

        {secondaryCategories('Swords')}
        {secondaryCategories('Knives')}
        {secondaryCategories('Axes')}
      </View>

      {Weapons(
        require('../assets/IMG_2038.HEIC.jpeg'),
        'The Dragon Slayer',
        'Axe'
      )}

      {Weapons(require('../assets/IMG_2040.HEIC.jpeg'), 'Slasher', 'Sword')}
    </SafeAreaView>
  );
}
